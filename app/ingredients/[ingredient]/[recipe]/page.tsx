"use client";

import React, { useEffect, useState } from "react";
import { fetchRecipeDetails } from "@/api/mealDB";
import {
	saveRecipe,
	removeRecipe,
	isRecipeSaved,
} from "../../../utils/savedRecipes";
import Recipe from "@/components/Recipe";
import { MealDBRecipeDetail } from "@/app/types/api";

interface RecipeDetailPageProps {
	params: { ingredient: string; recipe: string };
}

const RecipeDetailPage: React.FC<RecipeDetailPageProps> = ({ params }) => {
	const [recipeDetails, setRecipeDetails] =
		useState<MealDBRecipeDetail | null>(null);
	const { recipe } = params;
	const [isSaved, setIsSaved] = useState<boolean>(false);

	useEffect(() => {
		const getRecipeDetails = async () => {
			if (!recipe) return;
			try {
				const data = await fetchRecipeDetails(recipe);
				if (data.meals) {
					setRecipeDetails(data.meals[0]);
					setIsSaved(isRecipeSaved(data.meals[0].idMeal));
				}
			} catch (error) {
				console.error("Failed to fetch recipe details:", error);
			}
		};
		getRecipeDetails();
	}, [recipe]);

	const toggleSaveRecipe = () => {
		if (recipeDetails) {
			isSaved
				? removeRecipe(recipeDetails.idMeal)
				: saveRecipe(recipeDetails);
			setIsSaved(!isSaved);
		}
	};

	return (
		<div className="container mx-auto p-4">
			{recipeDetails ? (
				<Recipe
					details={recipeDetails}
					isSaved={isSaved}
					onToggleSave={toggleSaveRecipe}
				/>
			) : (
				<p>Loading recipe details...</p>
			)}
		</div>
	);
};

export default RecipeDetailPage;
