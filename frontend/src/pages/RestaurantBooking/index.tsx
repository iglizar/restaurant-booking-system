import {
	RestaurantFormProvider,
	useRestaurantForm,
} from "../../contexts/RestaurantFormContext";
import Welcome from "./Welcome";
import DinersSelector from "./DinersSelector";
import DateSelector from "./DateSelector";
import HourSelector from "./HourSelector";
import CustomerDetails from "./CustomerDetails";
import BookingConfirmation from "./BookingConfirmation";

const StepSwitcher = () => {
	const { previousStep, step, methods } = useRestaurantForm();

	const renderStep = () => {
		switch (step) {
			case 1:
				return <Welcome />;
			case 2:
				return <DinersSelector />;
			case 3:
				return <DateSelector />;
			case 4:
				return <HourSelector />;
			case 5:
				return <CustomerDetails />;
			case 6:
				return <BookingConfirmation />;
			default:
				return <div>Unknown step</div>;
		}
	};

	return (
		<div
			style={{
				backgroundImage: `url(${methods.watch("restaurant.backgroundImage")})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				minHeight: "100vh",
			}}
		>
			<div className="w-full align-top flex flex-col justify-center">
				<div className="mx-auto mt-24 h-96 w-11/12 lg:w-8/12 xl:w-7/12 bg-white bg-opacity-90 p-4 lg:py-4 lg:px-8 rounded-lg justify-between flex flex-col shadow-lg text-center space-y-6">
					<div className="flex flex-col space-y-4 lg:space-y-8 h-full px-4 sm:px-4 lg:px-16 xl:px-32">
						{methods.getValues("restaurant.logo") && (
							<img
								src={methods.getValues("restaurant.logo")}
								alt="Logo del Restaurante"
								className="mx-auto h-16 w-auto"
							/>
						)}
						{renderStep()}
					</div>
					{step > 1 &&
						<div className="flex items-center justify-between w-full mt-5">
							<button onClick={previousStep} className="text-black">
								<svg
									className="w-6 h-6"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M15 19l-7-7 7-7"
									></path>
								</svg>
							</button>
							<div
								className="flex w-full h-1.5 bg-gray-100 rounded-full overflow-hidden dark:bg-neutral-500"
								role="progressbar"
							>
								<div
									className="flex flex-col justify-center rounded-full overflow-hidden bg-black text-xs text-white text-center whitespace-nowrap transition-all duration-500 ease-in-out dark:bg-black"
									style={{ width: `${(step / 6) * 100}%` }}
								></div>
							</div>
						</div>
					}
				</div>

			</div>
		</div>
	);
};

const RestaurantBooking = () => {
	return (
		<RestaurantFormProvider>
			<StepSwitcher />
		</RestaurantFormProvider>
	);
};

export default RestaurantBooking;
