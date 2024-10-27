import { capitaliseFirstLetter } from "../../utils/capitalise";
import { saveRecipe, removeRecipe, isRecipeSaved } from "../../utils/savedRecipes";

describe("capitaliseFirstLetter", () => {
	it("should capitalise the first letter of a string", () => {
		expect(capitaliseFirstLetter("hello")).toBe("Hello");
		expect(capitaliseFirstLetter("WORLD")).toBe("World");
		expect(capitaliseFirstLetter("123abc")).toBe("123abc");
		expect(capitaliseFirstLetter("")).toBe("");
	});
});

describe("Saved Recipes Utility Functions", () => {
	beforeEach(() => {
		localStorage.clear();
	});

	it("should save a recipe to local storage", () => {
		const recipe = { idMeal: "1", strMeal: "Test Meal" };

		saveRecipe(recipe);

		const savedRecipes = JSON.parse(
			localStorage.getItem("savedRecipes") || "[]"
		);
		expect(savedRecipes).toEqual([recipe]);
	});

	it("should remove a recipe from local storage", () => {
		const recipe1 = { idMeal: "1", strMeal: "Test Meal 1" };
		const recipe2 = { idMeal: "2", strMeal: "Test Meal 2" };

		saveRecipe(recipe1);
		saveRecipe(recipe2);

		removeRecipe(recipe1.idMeal);

		const savedRecipes = JSON.parse(
			localStorage.getItem("savedRecipes") || "[]"
		);
		expect(savedRecipes).toEqual([recipe2]);
	});

	it("should return true if a recipe is saved", () => {
		const recipe = { idMeal: "1", strMeal: "Test Meal" };

		saveRecipe(recipe);

		const isSaved = isRecipeSaved(recipe.idMeal);
		expect(isSaved).toBe(true);
	});

	it("should return false if a recipe is not saved", () => {
		const isSaved = isRecipeSaved("non-existent-id");
		expect(isSaved).toBe(false);
	});
});
