import Link from "next/link";

const Navbar = () => {
	return (
		<div className="py-5 bg-blue-200 border-b-2 flex flex-row align-middle justify-center font-bold">
			<div className="flex">
				<Link href="/">
					<img
						width="48"
						height="48"
						src="https://img.icons8.com/doodle/48/knife-and-spatchula.png"
						alt="knife-and-spatchula"
					/>
				</Link>
			</div>
			<div className="flex gap-2">
				<Link href="/" className="flex-1 text-center">
					<h3>Home</h3>
				</Link>{" "}
				<Link href="/ingredients" className="flex-1 text-center">
					<h3>Recipe Generator</h3>
				</Link>{" "}
				<Link href="/saved-recipes" className="flex-1 text-center">
					<h3>Saved Recipes</h3>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
