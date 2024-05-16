import React, {
	createContext,
	useContext,
	useState,
	ReactNode,
	useEffect,
} from "react";
import { useForm, FormProvider } from "react-hook-form";
import { ContextType, FormValues } from "../utils/types";
import { useParams } from "react-router-dom";
import axios from "axios";

const RestaurantFormContext = createContext<ContextType | undefined>(undefined);

export const useRestaurantForm = () => {
	const context = useContext(RestaurantFormContext);
	if (!context) {
		throw new Error(
			"useRestaurantForm must be used within a RestaurantFormProvider"
		);
	}
	return context;
};

export const RestaurantFormProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const methods = useForm<FormValues>({ mode: "onTouched" });
	const [step, setStep] = useState(1);
	const { restaurantName } = useParams();
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState();
	const nextStep = () => setStep(step + 1);
	const previousStep = () => setStep(step - 1);

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_API_URL}/restaurants/${restaurantName}`)
			.then((response: any) => {
				methods.register("restaurant", {
					value: response.data,
				});
				setIsLoading(false);
			})
			.catch((error: { message: any }) => {
				setError(error.message);
				setIsLoading(false);
			});
	}, [restaurantName, methods]);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}

	if (!methods.watch("restaurant")) {
		return (
			<div>Restaurant "{restaurantName}" was not found in our database</div>
		);
	}

	return (
		<RestaurantFormContext.Provider value={{ step, nextStep, previousStep, methods }}>
			<FormProvider {...methods}>{children}</FormProvider>
		</RestaurantFormContext.Provider>
	);
};
