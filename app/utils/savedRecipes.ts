/**
 * Saves a recipe to local storage by adding it to the "savedRecipes" array.
 *
 * @param recipe - The recipe object to be saved.
 */
export const saveRecipe = (recipe: any) => {
	const savedRecipes = JSON.parse(
		localStorage.getItem("savedRecipes") || "[]"
	);
	savedRecipes.push(recipe);
	localStorage.setItem("savedRecipes", JSON.stringify(savedRecipes));
};

/**
 * Removes a recipe from local storage by filtering out the recipe with the specified ID.
 *
 * @param idMeal - The ID of the recipe to be removed.
 * @returns The updated array of saved recipes.
 */
export const removeRecipe = (idMeal: string) => {
	const savedRecipes = JSON.parse(
		localStorage.getItem("savedRecipes") || "[]"
	);
	const updatedRecipes = savedRecipes.filter(
		(saved: any) => saved.idMeal !== idMeal
	);
	localStorage.setItem("savedRecipes", JSON.stringify(updatedRecipes));
	return updatedRecipes;
};

/**
 * Checks if a recipe with the specified ID is saved in local storage.
 *
 * @param idMeal - The ID of the recipe to check.
 * @returns True if the recipe is saved, false otherwise.
 */
export const isRecipeSaved = (idMeal: string) => {
	const savedRecipes = JSON.parse(
		localStorage.getItem("savedRecipes") || "[]"
	);
	return savedRecipes.some((saved: any) => saved.idMeal === idMeal);
};
