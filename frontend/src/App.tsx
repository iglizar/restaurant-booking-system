import "./App.css";
import Index from "./pages/Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RestaurantBooking from "./pages/RestaurantBooking";
import Layout from "./Layout";


function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/:restaurantName" element={<RestaurantBooking />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
