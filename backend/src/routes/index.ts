import express from "express";
import { restaurantsRoute } from "./restaurantsRoute";

export const routes = express.Router();

routes.use(restaurantsRoute);
