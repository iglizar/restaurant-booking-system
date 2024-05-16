import prisma from "../db/prisma"
import { Restaurant } from "@prisma/client";

export const getRestaurants = async () => {
	try {
		const restaurants = await prisma.restaurant.findMany(
			{
				select: {
					id: true,
					name: true,
					href: true,
					backgroundImage: true,
					image: true
				},
			}
		);
		return restaurants;
	} catch (error) {
		throw error;
	}
};

export const getRestaurantByHref = async (href: Restaurant["href"]) => {
	try {
		return await prisma.restaurant.findFirst({
			where: {
				href
			}
		});
	} catch (error) {
		throw error;
	}
};

type Slot = {
	date: Date;
	available: boolean;
}

export const getRestaurantAvailability = async (restaurantId: Restaurant["id"], peopleQuantity: number) => {
	const restaurant = await prisma.restaurant.findUnique({
		where: { id: restaurantId },
		include: {
			Table: {
				include: {
					Booking: true
				}
			}
		}
	});
	if (!restaurant) throw new Error("Restaurant not found");

	const availableTables = restaurant.Table.filter(table => table.capacity >= peopleQuantity);
	let availability: { date: Date, slots: Slot[] }[] = [];
	const openingHour: number = parseInt(restaurant.openingHour);
	const closingHour: number = parseInt(restaurant.closingHour);

	for (let i = 1; i < 8; i++) {
		let slots = [];
		let date = new Date();
		date.setDate(date.getDate() + i);
		date.setHours(0, 0, 0, 0);

		for (let j = openingHour; j < closingHour; j++) {
			let slotDate = new Date(date);
			slotDate.setHours(j, 0, 0, 0);

			const available = availableTables.some(table => {
				const bookings = table.Booking.filter(booking => booking.startDate.getTime() === slotDate.getTime());
				return bookings.length === 0;
			});
			slots.push({ date: slotDate, available });
		}

		availability.push({ date, slots });
	}
	return availability;
}

export const createBooking = async (restaurantId: Restaurant["id"], body: any) => {
	const { name, email, phone, startDate, peopleQuantity } = body;

	try {
		const restaurant = await prisma.restaurant.findUnique({
			where: { id: restaurantId },
			include: {
				Table: {
					include: {
						Booking: true
					}
				}
			}
		});
		if (!restaurant) throw new Error("Restaurant not found");

		const availableTable = restaurant.Table.find(table => {
			const bookings = table.Booking.filter(booking => booking.startDate.getTime() === new Date(startDate).getTime());
			return bookings.length === 0;
		});
		if (!availableTable) throw new Error("There are no tables available");

		const endDate = new Date(startDate);
		endDate.setHours(endDate.getHours() + 1);

		const booking = await prisma.booking.create({
			data: {
				name,
				email,
				phone,
				peopleQuantity,
				startDate: new Date(startDate),
				endDate: new Date(endDate),
				table: {
					connect: { id: availableTable.id }
				}
			}
		});

		return booking;
	} catch (error) {
		console.error(error);
		throw error;
	}
};