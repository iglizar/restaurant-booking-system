import { useEffect, useState } from "react";
import axios from "axios";
import RestaurantCard from "../components/RestaurantCard";
import { Restaurant } from "../utils/types";

const IndexPage = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState();

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/restaurants`)
      .then((response: any) => {
        setRestaurants(response.data);
        setLoading(false);
      })
      .catch((error: { message: any }) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error)
		return <p>Error happened while fetching the restaurants ({error})</p>;
	
  return (
    <div className="flex flex-col items-center space-y-4">
      {restaurants?.map((restaurant: Restaurant, index) => (
        <div key={index} className="w-full max-w-3xl p-2">
          <RestaurantCard restaurant={restaurant} />
        </div>
      ))}
    </div>
  );
};

export default IndexPage;
