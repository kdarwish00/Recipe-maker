import { RecipePreview } from "../types/recipe";

/**
 * Saves a recipe to localStorage.
 * @param {RecipePreview} recipe - The recipe object to be saved.
 */
export const saveRecipe = (recipe: RecipePreview): void => {
	const savedRecipes: RecipePreview[] = JSON.parse(
		localStorage.getItem("savedRecipes") || "[]"
	);
	savedRecipes.push(recipe);
	localStorage.setItem("savedRecipes", JSON.stringify(savedRecipes));
};

/**
 * Removes a recipe from localStorage by its ID.
 * @param {string} idMeal - The ID of the recipe to be removed.
 * @returns {RecipePreview[]} - Updated list of saved recipes after removal.
 */
export const removeRecipe = (idMeal: string): RecipePreview[] => {
	const savedRecipes: RecipePreview[] = JSON.parse(
		localStorage.getItem("savedRecipes") || "[]"
	);
	const updatedRecipes = savedRecipes.filter(
		(saved) => saved.idMeal !== idMeal
	);
	localStorage.setItem("savedRecipes", JSON.stringify(updatedRecipes));
	return updatedRecipes;
};

/**
 * Checks if a recipe is saved in localStorage by its ID.
 * @param {string} idMeal - The ID of the recipe to check.
 * @returns {boolean} - True if the recipe is saved, otherwise false.
 */
export const isRecipeSaved = (idMeal: string): boolean => {
	const savedRecipes: RecipePreview[] = JSON.parse(
		localStorage.getItem("savedRecipes") || "[]"
	);
	return savedRecipes.some((saved) => saved.idMeal === idMeal);
};
