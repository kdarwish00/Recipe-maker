export interface MealDBIngredient {
	idIngredient: string;
	strIngredient: string;
	strDescription?: string;
	strType?: string;
}

export interface MealDBRecipePreview {
	idMeal: string;
	strMeal: string;
	strMealThumb: string;
}

export interface MealDBRecipeDetail {
	idMeal: string;
	strMeal: string;
	strInstructions: string;
	strMealThumb: string;
	strCategory?: string;
	strArea?: string;
	strTags?: string;
	strYoutube?: string;
}

export interface IngredientListResponse {
	meals: MealDBIngredient[];
}

export interface RecipeListResponse {
	meals: MealDBRecipePreview[];
}

export interface RecipeDetailResponse {
	meals: MealDBRecipeDetail[];
}
