import { useEffect, useState } from "react";
import { RecipePreview } from "../types";

/**
 * Custom hook to fetch and return a list of recipes based on the given ingredient.
 * @param {string} ingredient - The main ingredient to filter recipes by.
 * @returns {{ recipeList: RecipePreview[]; loading: boolean; error: string | null }} - Object containing:
 * - recipeList: Array of recipes matching the ingredient filter.
 * - loading: Boolean indicating the loading state of the fetch request.
 * - error: Error message if the fetch fails.
 */
const useFetchRecipes = (
	ingredient: string
): { recipeList: RecipePreview[]; loading: boolean; error: string | null } => {
	const [recipeList, setRecipeList] = useState<RecipePreview[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchRecipes = async () => {
			if (!ingredient) {
				setRecipeList([]); // Reset recipe list if no ingredient
				setLoading(false);
				return;
			}
			setLoading(true);
			setError(null); // Reset error state

			try {
				const response = await fetch(
					`https://themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
				);
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				const data = await response.json();
				setRecipeList(data.meals || []); // Handle case where meals is undefined
			} catch (err) {
				setError(
					err instanceof Error ? err.message : "An error occurred"
				);
			} finally {
				setLoading(false);
			}
		};

		fetchRecipes();
	}, [ingredient]);

	return { recipeList, loading, error };
};

export default useFetchRecipes;
