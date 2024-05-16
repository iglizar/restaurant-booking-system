import { useRestaurantForm } from "../../contexts/RestaurantFormContext";
import { utcTime } from "../../utils/functions";
import { Slot } from "../../utils/types";

const HourSelector = () => {
	const { methods, nextStep } = useRestaurantForm();

	const handleHourSelect = (date: Date) => {
		methods.setValue("selectedSlot", date);
		nextStep();
	};

	return (
		<>
			<h1 className="text-xl font-semibold">Select Hour</h1>
			<div className="flex flex-col overflow-y-scroll">
				{methods.watch("selectedDate").slots.map((slot: Slot, i: number) => (
					<button
						key={i}
						disabled={!slot.available}
						onClick={() => handleHourSelect(slot.date)}
						className={`${slot.available ? "bg-black hover:bg-gray-700" : "bg-gray-600 opacity-40"} mr-2 mb-2 text-white font-bold py-2 px-4 rounded ${!slot.available ? "cursor-disabled" : ""}`}
					>
						{utcTime(new Date(slot.date))}
					</button>
				))}
			</div>
		</>
	);
};

export default HourSelector;