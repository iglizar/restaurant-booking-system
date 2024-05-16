
import { Link } from "react-router-dom";
import { useRestaurantForm } from "../../contexts/RestaurantFormContext";
import { utcTime } from "../../utils/functions";

const BookingConfirmation = () => {
	const { methods } = useRestaurantForm();

	return (
		<>
			<h1 className="text-xl font-bold">Thank you!</h1>
			<h2 className="text-lg font-semibold">
				Your reservation at {methods.getValues("restaurant.name")} for {methods.getValues("peopleQuantity")} diners at {utcTime(new Date(methods.getValues("selectedSlot")))} has been confirmed.
			</h2>

			<h3 className="text-md">
				We have sent you an email with the details of your reservation.
			</h3>

			<Link to="/" className="bg-black text-white font-bold py-2 px-4 rounded hover:bg-gray-800"
			>
				Main menu
			</Link>
		</>
	)
}

export default BookingConfirmation;