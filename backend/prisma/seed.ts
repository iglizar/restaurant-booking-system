import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	await prisma.booking.deleteMany({})
	await prisma.table.deleteMany({});
	await prisma.restaurant.deleteMany({});
	
	const date = new Date();
	date.setHours(15, 0, 0, 0);
	await prisma.restaurant.create({
		data: {
			name: "Pujol",
			href: "pujol",
			address: "Tennyson 133",
			openingHour: "19",
			closingHour: "24",
			backgroundImage: "/pujol.jpg",
			image: "https://cdn.vox-cdn.com/thumbor/WGAuDMC21nwsfI1O_Ha6is1opjo=/0x0:3009x2000/1520x1013/filters:focal(1224x1040:1704x1520):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/52954609/_MG_8513.0.jpg",
			logo: "/logoPujol.png",
			Table: {
				create: [
					{
						capacity: 8,
						Booking: {
							create: [
								{
									peopleQuantity: 7,
									startDate: new Date("2024-05-19T21:00:00.000Z"),
									endDate: new Date("2024-05-19T22:00:00.000Z"),
									name: "John Loves Pujol",
									email: "john-loves-pujol@gmail.com",
									phone: "+52 1 55 1234 5678",
								}
							]
						}
					},
					{
						capacity: 2,
						Booking: {
							create: [
								{
									peopleQuantity: 2,
									startDate: new Date("2024-05-19T19:00:00.000Z"),
									endDate: new Date("2024-05-19T20:00:00.000Z"),
									name: "Nick Loves Pujol",
									email: "nick-loves-pujol@gmail.com",
									phone: "+52 1 55 1234 5678",
								}
							]
						}
					}
				]
			}
		}
	});
	await prisma.restaurant.create({
		data: {
			name: "La Buena Barra",
			href: "la-buena-barra",
			address: "6 de lado de la laguna, Blvd. Kukulcan KM 12.6",
			openingHour: "20",
			closingHour: "22",
			image: "https://resizer.otstatic.com/v2/photos/xlarge/1/25898071.webp",
			backgroundImage: "labuenabarra.jpg",
			logo: "logoLaBuenaBarra.svg",
			Table: {
				create: [
					{
						capacity: 5,
						Booking: {
							create: [
								{
									peopleQuantity: 5,
									startDate: new Date("2024-05-19T20:00:00.000Z"),
									endDate: new Date("2024-05-19T21:00:00.000Z"),
									name: "John Buena",
									email: "john-loves-la-buena-barra@hotmail.com",
									phone: "+52 1 55 1234 5679",
								},
								{
									peopleQuantity: 5,
									startDate: new Date("2024-05-18T21:00:00.000Z"),
									endDate: new Date("2024-05-18T22:00:00.000Z"),
									name: "Taylor Buena",
									email: "taylor-loves-la-buena-barra@hotmail.com",
									phone: "+52 1 55 1234 5679",
								},
								{
									peopleQuantity: 5,
									startDate: new Date("2024-05-21T20:00:00.000Z"),
									endDate: new Date("2024-05-21T21:00:00.000Z"),
									name: "John Buena",
									email: "john-loves-la-buena-barra@hotmail.com",
									phone: "+52 1 55 1234 5679",
								},
								{
									peopleQuantity: 5,
									startDate: new Date("2024-05-21T21:00:00.000Z"),
									endDate: new Date("2024-05-21T22:00:00.000Z"),
									name: "Taylor Buena",
									email: "taylor-loves-la-buena-barra@hotmail.com",
									phone: "+52 1 55 1234 5679",
								},
								{
									peopleQuantity: 5,
									startDate: new Date("2024-05-27T20:00:00.000Z"),
									endDate: new Date("2024-05-27T21:00:00.000Z"),
									name: "John Buena",
									email: "john-loves-la-buena-barra@hotmail.com",
									phone: "+52 1 55 1234 5679",
								},
								{
									peopleQuantity: 5,
									startDate: new Date("2024-05-27T21:00:00.000Z"),
									endDate: new Date("2024-05-27T22:00:00.000Z"),
									name: "Taylor Buena",
									email: "taylor-loves-la-buena-barra@hotmail.com",
									phone: "+52 1 55 1234 5679",
								},
							]
						}	
					}
				]
			}
		}
	});
	await prisma.restaurant.create({
		data: {
			name: "Pangea",
			href: "pangea",
			address: "Av. del Roble 660",
			openingHour: "14",
			closingHour: "19",
			image: "pangea.jpg",
			backgroundImage: "pangea.jpg",
			logo: "logoPangea.png",
			Table: {
				create: [
					{
						capacity: 8
					},
				]
			}
		}
	});
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});