import { Router } from "express";
import {
	createBooking,
	getRestaurantAvailability,
	getRestaurantByHref,
	getRestaurants,
} from "../controllers/restaurantsController";

export const restaurantsRoute: Router = Router();

restaurantsRoute.get("/restaurants", async (req, res) => {
	try {
		res.json(await getRestaurants());
	} catch (error) {
		res.json({ error })
	}
});

restaurantsRoute.get("/restaurants/:restaurantHref", async (req, res) => {
	try {
		res.json(await getRestaurantByHref(req.params.restaurantHref));
	} catch (error) {
		res.json({ error })
	}
});

restaurantsRoute.get("/restaurants/:restaurantId/availability", async (req, res) => {
	try {
		const availability = await getRestaurantAvailability(
			Number(req.params.restaurantId),
			Number(req.query.peopleQuantity)
		);
		res.json(availability)
	} catch (error) {
		res.json({ error })
	}
});

restaurantsRoute.post("/restaurants/:restaurantId/book", async (req, res) => {
	try {
		const booking = await createBooking(parseInt(req.params.restaurantId), req.body)
		res.json(booking);
	} catch (error) {
		res.json({ error })
	}
});

