import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import MovieRoute from "./routes/MovieRoute.js";

import cors from "cors";

//config
dotenv.config();

//database
connectDB();

const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/movie", MovieRoute);

app.get("/", (req, res) => {
  res.send({
    message: "Welcome to the app",
  });
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`.bgCyan.white);
});
