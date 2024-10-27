"use client";

import Card from "@/components/Card";
import useFetchRecipes from "../../hooks/useFetchRecipes";
import { capitaliseFirstLetter } from "../../utils/capitalise";

const IngredientPage = ({ params }: { params: { ingredient: string } }) => {
	const { ingredient } = params;
	const { recipeList, loading } = useFetchRecipes(ingredient);

	return (
		<div className="container mx-auto p-4">
			<h2 className="text-xl font-bold">
				{capitaliseFirstLetter(ingredient)} Recipes
			</h2>
			{loading ? (
				<p>Loading recipes...</p>
			) : recipeList.length === 0 ? (
				<p>No recipes found for {ingredient}.</p>
			) : (
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
					{recipeList.map((recipe) => (
						<Card
							key={recipe.idMeal}
							title={recipe.strMeal}
							imageUrl={recipe.strMealThumb}
							description={`View Recipe`}
							onClick={() =>
								(window.location.href = `/ingredients/${encodeURIComponent(
									ingredient
								)}/${recipe.idMeal}`)
							}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default IngredientPage;
