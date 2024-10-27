import { MealDBRecipeDetail } from "@/app/types/api";

interface RecipeProps {
	details: MealDBRecipeDetail;
	isSaved: boolean;
	onToggleSave: () => void;
}

const Recipe: React.FC<RecipeProps> = ({ details, isSaved, onToggleSave }) => {
	return (
		<div>
			<div>
				<h2 className="text-2xl font-bold mb-4">{details.strMeal}</h2>
				<button
					onClick={onToggleSave}
					className={`mb-4 px-4 py-2 text-white ${
						isSaved ? "bg-red-500" : "bg-green-500"
					} rounded`}
				>
					{isSaved ? "Remove from Saved" : "Save Recipe"}
				</button>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
				<img
					src={details.strMealThumb}
					alt={details.strMeal}
					className="w-full object-cover mb-4"
				/>
				<div>
					<h2 className="font-bold text-xl">Ingredients</h2>
					<ul className="list-disc list-inside">
						{Array.from({ length: 20 }, (_, i) => {
							const ingredient =
								details[
									`strIngredient${
										i + 1
									}` as keyof MealDBRecipeDetail
								];
							const measure =
								details[
									`strMeasure${
										i + 1
									}` as keyof MealDBRecipeDetail
								];
							return ingredient ? (
								<li key={i}>{`${ingredient} - ${measure}`}</li>
							) : null;
						})}
					</ul>
				</div>
			</div>

			<div>
				<h2 className="font-bold text-xl">Description</h2>
				<ul className="list-disc list-inside">
					{details.strInstructions
						.split(". ")
						.map((sentence, index) => (
							<li key={index}>{sentence.trim()}.</li>
						))}
				</ul>
			</div>
		</div>
	);
};

export default Recipe;
