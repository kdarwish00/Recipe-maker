"use client";

import React, { useEffect, useState } from "react";
import Card from "@/components/Card";
import Link from "next/link";
import { RecipePreview } from "../types";

export default function SavedRecipes() {
	const [savedRecipes, setSavedRecipes] = useState<RecipePreview[]>([]);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const loadSavedRecipes = () => {
			const savedRecipesFromLocalStorage = JSON.parse(
				localStorage.getItem("savedRecipes") || "[]"
			);
			setSavedRecipes(savedRecipesFromLocalStorage);
			setLoading(false);
		};
		loadSavedRecipes();
	}, []);

	const removeRecipe = (idMeal: string) => {
		const updatedRecipes = savedRecipes.filter(
			(recipe) => recipe.idMeal !== idMeal
		);
		setSavedRecipes(updatedRecipes);
		localStorage.setItem("savedRecipes", JSON.stringify(updatedRecipes));
	};

	return (
		<div className="container mx-auto p-4">
			<h1 className="text-2xl font-bold">Saved Recipes</h1>
			{loading ? (
				<p>Loading saved recipes...</p>
			) : savedRecipes.length === 0 ? (
				<p>
					Seems like you don't have any recipes saved. Why not{" "}
					<Link className="font-bold underline" href="/ingredients">
						add some
					</Link>
				</p>
			) : (
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
					{savedRecipes.map((recipe) => (
						<Card
							key={recipe.idMeal}
							title={recipe.strMeal}
							imageUrl={recipe.strMealThumb}
							description={`View Recipe`}
							onClick={() =>
								(window.location.href = `/ingredients/${encodeURIComponent(
									recipe.strIngredient
								)}/${recipe.idMeal}`)
							}
							onRemove={() => removeRecipe(recipe.idMeal)}
						/>
					))}
				</div>
			)}
		</div>
	);
}
