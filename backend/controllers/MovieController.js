import Moviemodel from "../models/Moviemodel.js";

// Get all movies
export const getAllMovies = async (req, res) => {
  try {
    const movies = await Moviemodel.find();
    res.status(200).send({
      success: true,
      message: "All movies",
      movies,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMovieById = async (req, res) => {
  try {
    const movieId = req.params.id;
    const movie = await Moviemodel.findById(movieId);
    if (!movie) {
      return res.status(404).json({ message: "Movie not found" });
    }
    res.json(movie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Search for movies by name (case-insensitive)
export const searchMovies = async (req, res) => {
  const { name } = req.query;

  if (!name) {
    return res
      .status(400)
      .json({ message: "Name query parameter is required" });
  }

  try {
    const movies = await Moviemodel.find({
      Title: { $regex: name, $options: "i" },
    });
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
