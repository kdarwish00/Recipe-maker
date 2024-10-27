export interface Ingredient {
	id: string;
	name: string;
	quantity?: string;
	imageUrl: string;
}

export interface IngredientAPIResponse {
	idIngredient: string;
	strIngredient: string;
}

export interface Recipe {
	id: string;
	name: string;
	description?: string;
	ingredients: Ingredient[];
	instructions: string[];
	imageUrl: string;
}

export interface RecipePreview {
	idMeal: string;
	strMeal: string;
	strMealThumb: string;
	strIngredient: string;
}

