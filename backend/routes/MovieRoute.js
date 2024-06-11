import express from "express";
import {
  getAllMovies,
  getMovieById,
  searchMovies,
} from "../controllers/MovieController.js";

//router object
const router = express.Router();

//routing
//all movies
router.get("/all-movies", getAllMovies);

//single movie
router.get("/movies/:id", getMovieById);

router.get("/movies/search", searchMovies);

export default router;
