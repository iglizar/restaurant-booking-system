import { useState } from "react";
import { useRestaurantForm } from "../../contexts/RestaurantFormContext";
import { useForm } from "react-hook-form";
import axios from "axios";

const INPUTS = [
	{
		label: "Name",
		type: "text",
		rules: {
			required: true,
			pattern: {
				value: /^[a-zA-Z]+\s[a-zA-Z]+$/,
				message: "Name must be two words"
			}
		}

	},
	{
		label: "Email",
		type: "email",
		rules: {
			required: true,
			pattern: {
				value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
				message: "Email format is incorrect"
			}
		}
	},
	{
		label: "Phone",
		type: "tel",
		rules: {
			required: true,
			pattern: {
				value: /^[0-9]{10}$/,
				message: "Phone should be 10 digits"
			}
		}
	}
]

const CustomerDetails = () => {
	const { methods, nextStep } = useRestaurantForm();
	const [isLoading, setIsLoading] = useState(false);
	const { register, handleSubmit, formState: { errors } } = useForm();

	const onSubmit = async (data: any) => {
		try {
			setIsLoading(true);
			await axios.post(`${process.env.REACT_APP_API_URL}/restaurants/${methods.getValues("restaurant.id")}/book`, {
				email: data.email,
				name: data.name,
				phone: data.phone,
				peopleQuantity: methods.getValues("peopleQuantity"),
				startDate: methods.getValues("selectedSlot"),
			});
			setIsLoading(false);
			nextStep();
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<>
			<h1 className="text-xl font-bold">
				Please provide the following information to secure your booking:
			</h1>

			<form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-3 gap-x-4 gap-y-4 content-end">
				{INPUTS.map(
					(fieldName, index) => (
						<div
							key={index}
							className="flex flex-col gap-y-1 text-sm"
						>
							<label
								htmlFor={fieldName.label.toLowerCase()}
								className="block text-sm font-semibold mb-1 text-left"
							>
								{fieldName.label}:
							</label>
							<input
								type={fieldName.type}
								id={fieldName.label.toLowerCase()}
								{...register(
									fieldName.label.toLowerCase(),
									fieldName.rules)}
								className="border border-gray-300 rounded px-3 py-2"
							/>
							{errors[fieldName.label.toLowerCase()] ? <p className="text-red-500 text-sm">{errors[fieldName.label.toLowerCase()]?.message?.toString()}</p> : null}
						</div>
					)
				)}
				<div className="flex col-span-3 justify-center">
					<button
						type="submit"
						className="bg-black px-8 text-white font-bold py-2 px-4 rounded hover:bg-gray-800 self-center"
					>
						{isLoading ? "Loading..." : "Confirm"}
					</button>
				</div>
			</form>
		</>
	);
};

export default CustomerDetails;
