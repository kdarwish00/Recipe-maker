interface CardProps {
	title: string;
	imageUrl: string;
	description: string;
	onClick: () => void;
	onRemove?: () => void;
}

const Card: React.FC<CardProps> = ({
	title,
	imageUrl,
	description,
	onClick,
	onRemove,
}) => {
	return (
		<div className="border rounded-lg overflow-hidden shadow-md">
			<img
				src={imageUrl}
				alt={title}
				className="w-full h-48 object-cover"
			/>
			<div className="p-4">
				<h3 className="font-bold text-lg">{title}</h3>
				<button
					onClick={onClick}
					className="text-blue-500 hover:underline"
				>
					{description}
				</button>
				{onRemove && (
					<button
						onClick={onRemove}
						className="text-red-500 hover:underline ml-4"
					>
						Remove
					</button>
				)}
			</div>
		</div>
	);
};

export default Card;
