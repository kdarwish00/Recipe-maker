import { useEffect, useState } from "react";
import { Ingredient, IngredientAPIResponse } from "../types";

/**
 * Custom hook to fetch and return a list of ingredients with their details.
 * @returns {Ingredient[]} - Array of ingredients with their IDs, names, and image URLs.
 */
const useFetchIngredients = (): Ingredient[] => {
	const [ingredients, setIngredients] = useState<Ingredient[]>([]);

	useEffect(() => {
		const fetchIngredients = async () => {
			const response = await fetch(
				"https://www.themealdb.com/api/json/v1/1/list.php?i=list"
			);
			const data = await response.json();
			const ingredientsList: Ingredient[] = data.meals.map(
				(ingredient: IngredientAPIResponse) => ({
					id: ingredient.idIngredient,
					name: ingredient.strIngredient,
					imageUrl: `https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}-Small.png`,
				})
			);
			setIngredients(ingredientsList);
		};
		fetchIngredients();
	}, []);

	return ingredients;
};

export default useFetchIngredients;
