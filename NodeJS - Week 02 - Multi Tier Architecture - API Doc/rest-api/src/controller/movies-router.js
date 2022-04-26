import express from "express";
const router = express.Router();
import * as movieService from "../service/movie-services.js";

// GET all movies
router.get("/", (req, res) => {
  const movieList = movieService.getMovies();
  res.status(200).send(movieList);
});

// GET a movie by id
router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const movie = movieService.getMovie(id);

  res.status(200).send(movie);
});

// ADD a movie
router.post("/", (req, res) => {
  const newMovie = req.body;
  const movieList = movieService.addMovie(newMovie);
  console.log(newMovie)

  res.status(201).send(movieList);
});

// EDIT a movie by id 
router.put("/:id", (req, res) => {
  const editedId = Number(req.params.id);
  const editedMovie = req.body;
  const movieList = movieService.editMovie(editedMovie, editedId);

  res.status(200).send(movieList);
});

// DELETE a movie by id
router.delete("/:id", (req, res) => {
  const deletedId = Number(req.params.id);
  const movieList = movieService.deleteMovie(deletedId);

  res.status(200).send(movieList);
});

export { router };
