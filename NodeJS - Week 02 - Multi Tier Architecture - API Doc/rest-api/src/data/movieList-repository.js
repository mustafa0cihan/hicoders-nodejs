const movieList = [
  {
    id: 10001,
    name: "Avengers:Endgame",
    year: "2019",
    genre: "Action",
    income: 858000
  },
  {
    id: 10002,
    name: "Avengers: Infinity War",
    year: "2018",
    genre: "Action",
    income: 678000
  },
  {
    id: 10003,
    name: "The Dark Knight",
    year: "2008",
    genre: "Action",
    income: 534000
  },
  {
    id: 10004,
    name: "The Lion King",
    year: "2008",
    genre: "Animation",
    income: 422000
  },
  {
    id: 10005,
    name: "The Toy Story 3",
    year: "2010",
    genre: "Animation",
    income: 415000
  },
  {
    id: 10005,
    name: "The Toy Story 3",
    year: "2010",
    genre: "Animation",
    income: 415000
  }

];

// get
export const getMovieList = () => {
  return movieList;
};

// post
export const createMovie = (pMovie) => {
  const lastMovieId = movieList[movieList.length - 1].id + 1;
  pMovie.id = lastMovieId;
  movieList.push(pMovie);
  return movieList;
};

// put
export const editMovie = (pMovie, pId) => {
  const foundIndex = movieList.findIndex((movie) => movie.id == pId);
  movieList[foundIndex] = { ...movieList[foundIndex], ...pMovie };
  return movieList;
};

//delete
export const deleteMovie = (pId) => {
  const foundIndex = movieList.findIndex((movie) => movie.id == pId);
  movieList.splice(foundIndex, 1);
  return movieList;
};

