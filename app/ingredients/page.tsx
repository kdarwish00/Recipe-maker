"use client";

import Card from "@/components/Card";
import useFetchIngredients from "../hooks/useFetchIngredients"

const IngredientsPage = () => {
	const ingredients = useFetchIngredients();

	return (
		<div className="container mx-auto p-4">
			<h2 className="text-2xl font-bold p-2 text-center">
				Choose an ingredient to get started!
			</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{ingredients.map((ingredient) => (
					<Card
						key={ingredient.id}
						title={ingredient.name}
						imageUrl={ingredient.imageUrl}
						description={"View Recipes"}
						onClick={() =>
							(window.location.href = `/ingredients/${encodeURIComponent(
								ingredient.name.toLowerCase()
							)}`)
						}
					/>
				))}
			</div>
		</div>
	);
};

export default IngredientsPage;
