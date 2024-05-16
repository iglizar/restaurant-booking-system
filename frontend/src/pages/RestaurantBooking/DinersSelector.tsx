import { useState } from "react";
import { useRestaurantForm } from "../../contexts/RestaurantFormContext";

const DinersSelector = () => {
	const { methods, nextStep } = useRestaurantForm();
	const [peopleQuantity, setPeopleQuantity] = useState<number>(5);

	const decreaseDiners = () => {
		if (peopleQuantity > 5 && peopleQuantity <= 10) {
			setPeopleQuantity(peopleQuantity - 1);
		}
	};

	const increaseDiners = () => {
		if (peopleQuantity < 10) {
			setPeopleQuantity(peopleQuantity + 1);
		}
	};
	const selectPeopleQuantity = (peopleQuantity: number) => {
		methods.setValue("peopleQuantity", peopleQuantity);
		nextStep();
	};

	return (
		<div className="flex flex-col items-center justify-center space-y-5">
			<h1 className="text-lg font-bold">Select the number of diners:</h1>
			<div className="flex flex-col space-y-4">
				<div className="flex justify-center space-x-4">
					{[1, 2, 3, 4].map((num) => (
						<button
							key={num}
							onClick={() => selectPeopleQuantity(num)}
							className="text-white text-lg bg-black px-3 py-1 rounded-full h-16 w-16 hover:bg-gray-700"
						>
							{num}
						</button>
					))}
				</div>
				<div className="flex justify-center space-x-2 ">
					<button
						onClick={decreaseDiners}
						className="text-white bg-black px-4 py-1 rounded-full h-8 self-center"
					>
						-
					</button>
					<button
						className="flex items-center justify-center text-xl bg-black text-white rounded-full h-16 w-16  hover:bg-gray-700"
						onClick={() => selectPeopleQuantity(peopleQuantity)}
					>
						{peopleQuantity}
					</button>
					<button
						onClick={increaseDiners}
						className="text-white bg-black px-4 py-1 rounded-full h-8 self-center"
					>
						+
					</button>
				</div>
			</div>
		</div>
	);
};

export default DinersSelector;
