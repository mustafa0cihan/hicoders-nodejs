const express = require("express");
router = express.Router();
const movieList = require("../service/movieList.json");
const rentList = require("../service/rentList.json");
const fs = require("fs");

const path =
  "C:/Users/mcmc0/Desktop/NodeJs-Week_01-Movie_ReST_Api/rest-api/service/movieList.json";

router.get("/", (req, res) => {
  res.send(movieList);
});

router.get("/:id", (req, res) => {
  const movie = movieList.movies.filter(
    (movie) => movie.id == req.params.id
  )[0];

  res.send(movie);
});

router.post("/", (req, res) => {
  const newMovie = req.body;

  movieList.movies.push(newMovie);
  fs.writeFile(path, JSON.stringify(movieList, null, 2), (err) => {
    if (err) {
      console.log("Error", err);
    }
  });

  res.send(movieList);
});

router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const editedMovieList = movieList.movies.map((movie) => {
    if (movie.id == id) {
      return (movie = { ...movie, ...req.body });
    } else {
      return movie;
    }
  });

  fs.writeFile(
    path,
    JSON.stringify(
      {
        movies: editedMovieList,
      },
      null,
      2
    ),
    (err) => {
      if (err) {
        console.log("Error", err);
      }
    }
  );

  res.send({
    movies: editedMovieList,
  });
});

router.delete("/:id", (req, res) => {
  const editedMovieList = movieList.movies.filter(
    (movie) => movie.id != req.params.id
  );

  fs.writeFile(
    path,
    JSON.stringify(
      {
        movies: editedMovieList,
      },
      null,
      2
    ),
    (err) => {
      if (err) {
        console.log("Error", err);
      }
    }
  );

  res.send({
    movies: editedMovieList,
  });
});

module.exports = router;
