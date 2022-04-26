import * as movieRepository from "../data/movieList-repository.js";

// get (all movies)
export const getMovies = () => {
  const movies = movieRepository.getMovieList();

  return movies;
};

// get (a movie)
export const getMovie = (pId) => {
  const movies = movieRepository.getMovieList();
  const movie = movies.find((mov) => mov.id == pId);

  return movie;
};

// post 
export const addMovie = (pMovie) => {
  const movies = movieRepository.createMovie(pMovie);

  return movies;
};

// put 
export const editMovie = (pMovie, pId) => {
  const movies = movieRepository.editMovie(pMovie, pId);

  return movies;
};

// delete
export const deleteMovie = (pId) => {
  const movies = movieRepository.deleteMovie(pId);

  return movies;
};