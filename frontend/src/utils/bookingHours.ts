import axios from "axios";
import { Restaurant } from "./types";

export const bookingHours = async (restaurantName: string) => {
  try {
    const response = await axios.get(
      `https://valiuapi.lizdevs.com/restaurants/${restaurantName}`
    );
    const restaurant: Restaurant = response.data;
    console.log("Restaurant data received:", restaurant);

    const openTime = new Date(`2000-01-01T${restaurant.openingHour}`);
    const closingTime = new Date(`2000-01-01T${restaurant.closingHour}`);

    const generateBookingIntervals = () => {
      const bookingIntervals: string[] = [];
      let currentTime = new Date(openTime);

      // Generar los intervalos hasta el cierre del restaurante
      while (currentTime < closingTime) {
        // Calcular la hora de fin del intervalo sumando 60 minutos
        const endTime = new Date(currentTime.getTime() + 60 * 60000);

        if (endTime > closingTime) {
          console.log("Break on end time exceeding closing time."); // Debug: Log breaking condition
          break;
        }

        const startFormattedTime = currentTime.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        const endFormattedTime = endTime.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        // Add the formatted interval to the array
        bookingIntervals.push(`${startFormattedTime} - ${endFormattedTime}`);
        
        // Log each interval for debugging
        console.log(`Interval added: ${startFormattedTime} - ${endFormattedTime}`);

        // Move current time to end time for next loop iteration
        currentTime = endTime;
      }

      return bookingIntervals;
    };

    return generateBookingIntervals();
  } catch (error) {
    console.error("Error fetching restaurant data:", error);
    return [];
  }
};