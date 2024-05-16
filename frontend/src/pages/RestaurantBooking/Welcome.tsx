import { useRestaurantForm } from "../../contexts/RestaurantFormContext";

const Welcome = () => {
	const { methods, nextStep } = useRestaurantForm();

	return (
		<div className="flex flex-col space-y-4">
			<h1 className="text-xl font-semibold">Welcome</h1>
			<h2 className="text-2xl font-bold">
				Booking for {methods.getValues("restaurant.name")}
			</h2>
			<h3 className="text-lg">{methods.getValues("restaurant.address")}</h3>
			<h4 className="text-lg">
				Open from {`${methods.getValues("restaurant.openingHour")} to ${methods.getValues("restaurant.closingHour")}`}
			</h4>
			<button
				className="bg-black text-white font-bold py-2 px-4 rounded hover:bg-gray-800"
				onClick={(e) => {
					e.preventDefault();
					nextStep();
				}}
			>
				Book
			</button>
		</div>
	);
};

export default Welcome;
