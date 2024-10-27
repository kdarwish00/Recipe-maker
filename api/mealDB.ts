import {
	IngredientListResponse,
	RecipeListResponse,
	RecipeDetailResponse,
} from "@/app/types/api";

const API_BASE_URL = "https://www.themealdb.com/api/json/v1/1";

// Fetch list of ingredients
export async function fetchIngredientList(): Promise<IngredientListResponse> {
	const response = await fetch(`${API_BASE_URL}/list.php?i=list`);
	if (!response.ok) {
		throw new Error("Failed to fetch ingredients");
	}
	/**
	 * @returns {IngredientListResponse} - List of ingredients.
	 */
	return response.json();
}

// Fetch recipes by main ingredient
export async function fetchRecipesByIngredient(
	ingredient: string
): Promise<RecipeListResponse> {
	const response = await fetch(`${API_BASE_URL}/filter.php?i=${ingredient}`);
	if (!response.ok) {
		throw new Error("Failed to fetch recipes");
	}
	/**
	 * @returns {RecipeListResponse} - List of recipes filtered by the specified ingredient.
	 */
	return response.json();
}

// Fetch detailed recipe information
export async function fetchRecipeDetails(
	id: string
): Promise<RecipeDetailResponse> {
	const response = await fetch(`${API_BASE_URL}/lookup.php?i=${id}`);
	if (!response.ok) {
		throw new Error("Failed to fetch recipe details");
	}
	/**
	 * @returns {RecipeDetailResponse} - Detailed recipe information for the specified recipe ID.
	 */
	return response.json();
}
