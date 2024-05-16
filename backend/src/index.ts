import express from "express";
import { routes } from "./routes"

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/", routes);

const server = app.listen(PORT, () =>
  console.log(`
🚀 Server ready at: ${PORT}`)
);
