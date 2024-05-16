import { Restaurant } from "../utils/types";
import { Link } from "react-router-dom";

const RestaurantCard = ({ restaurant }: { restaurant: Restaurant }) => {

	return (
		<div className="h-full flex border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden hover:opacity-80 transition-opacity duration-300 ">
			<div className="flex-1 w-full h-60">
					<img
						src={restaurant.image}
						alt={restaurant.name}
						className="object-cover h-full w-full"
					/>
			</div>
			<div className="flex-1 justify-between bg-gray-100 p-3 space-y-3">
				<div className="flex flex-col h-full justify-between">
					<div>
						<h1 className="text-xl font-medium">{restaurant.name}</h1>
						<p className="text-lg">
							{restaurant.address}
						</p>
					</div>
					<div className="flex justify-end">
						<Link
							className="bg-indigo-500 rounded-lg px-3 py-2 mt-3 text-white font-bold"
							to={`/${restaurant.href}`}
						>
							Book a table
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RestaurantCard;
