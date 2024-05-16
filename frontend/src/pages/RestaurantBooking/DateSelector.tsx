import axios from "axios";
import { useRestaurantForm } from "../../contexts/RestaurantFormContext";
import { useEffect, useState } from "react";
import { Spinner } from "../../components/Icons";
import { Availability } from "../../utils/types";

const DateSelector = () => {
	const { methods, nextStep } = useRestaurantForm();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		axios.get(`${process.env.REACT_APP_API_URL}/restaurants/${methods.getValues("restaurant.id")}/availability?peopleQuantity=${methods.getValues("peopleQuantity")}`).then(
			(response) => {
				methods.setValue("availabilities", response.data);
				setIsLoading(false);
			})
	}, [methods])

	const handleDateSelect = (availability: Availability) => {
		methods.setValue("selectedDate", availability);
		nextStep();
	};

	return (
		<div className="flex flex-col space-y-6">
			<h1 className="text-lg font-bold">Please choose the desired date:</h1>
			{isLoading &&
				<div className="flex flex-row justify-between mx-auto">
					<Spinner />
				</div>
			}
			{!isLoading && (
				<div className="flex flex-row justify-between">
					{methods.watch("availabilities").map((availability: Availability, index: number) => (
						<button
							key={index}
							disabled={!availability.slots.some((slot) => slot.available)}
							className={`flex flex-col items-center justify-center text-white rounded-full ${!availability.slots.some((slot) => slot.available) ? "cursor-disabled" : ""}`}
							onClick={() => handleDateSelect(availability)}
						>
							<div className="text-md font-medium text-black self-center">
								{new Date(availability.date).toLocaleDateString("en-US", { weekday: "short" })}
							</div>
							<div className={`${availability.slots.some((slot) => slot.available) ? "bg-black hover:bg-gray-700" : "bg-gray-600 opacity-40"} text-white xl:w-12 xl:h-12 w-8 h-8 flex items-center justify-center rounded-full text-lg font-bold `}>
								{new Date(availability.date).getDate()}
							</div>
							<div className="text-md font-medium text-black">
								{new Date(availability.date).toLocaleDateString("en-US", { month: "short" })}
							</div>
						</button>
					))}
				</div>
			)}
		</div>
	);
};

export default DateSelector;
