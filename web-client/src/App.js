import { useEffect, useState } from "react";
import * as movieListData from "./service/movie.service.js";
import * as rentListData from "./service/rent.service.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [rentList, setRentList] = useState([]);
  const [movie, setMovie] = useState({
    id: Math.floor(Math.random() * 100000),
    name: null,
    year: null,
    genre: null,
    income: null,
  });
  const [editedMovie, setEditedMovie] = useState({});
  const [rent, setRent] = useState({});

  useEffect(() => {
    getMovieList();
    getRentList();
  }, [movieList]);

  const getMovieList = async () => {
    const movieList = await movieListData.getMovieList();
    setMovieList(movieList);
  };

  const getRentList = async () => {
    const rentList = await rentListData.getRentList();
    setRentList(rentList);
  };

  const movieColumns = movieList[0] && Object.keys(movieList[0]);
  const rentColumns = rentList[0] && Object.keys(rentList[0]);

  const addMovie = async (pMovie) => {
    const result = await fetch("http://localhost:3100/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pMovie),
    });
  };

  const editMovie = async (pMovie) => {
    const result = await fetch(`http://localhost:3100/movies/${pMovie.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pMovie),
    });
  };

  const handleEdit = (pMovie) => {
    setEditedMovie(pMovie);
  };

  const deleteMovie = async (movieID) => {
    const result = await fetch(`http://localhost:3100/movies/${movieID}`, {
      method: "DELETE",
    });
  };

  const addRent = async (pRent) => {
    const result = await fetch("http://localhost:3100/rents", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pRent),
    });
  };

  return (
    <div className="container text-center mt-4">
      <h1>MY MOVIE LIST</h1>
      <table className="table">
        <thead>
          <tr>
            {movieList[0] && movieColumns.map((column) => <th>{column}</th>)}
          </tr>
        </thead>
        <tbody>
          {movieList[0] &&
            movieList.map((movie) => (
              <tr>
                {movieColumns.map((column) => (
                  <td>{movie[column]}</td>
                ))}
                <td>
                  <i
                    className="bi bi-recycle"
                    onClick={() => handleEdit(movie)}
                  ></i>
                </td>
                <td>
                  <i
                    className="bi bi-trash2-fill"
                    onClick={() => deleteMovie(movie["id"])}
                  ></i>
                </td>
                <td>
                  <i
                    className="bi bi-currency-dollar"
                    onClick={() => setRent({ ...rent, movieId: movie.id })}
                  ></i>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="row">
        <form className="col" onSubmit={() => addMovie(movie)}>
          <input
            type="text"
            placeholder="Movie Name"
            onChange={(e) => setMovie({ ...movie, name: e.target.value })}
          />
          <br />
          <input
            type="number"
            placeholder="Release Year"
            onChange={(e) => setMovie({ ...movie, year: e.target.value })}
          />
          <br />
          <input
            type="text"
            placeholder="Genre"
            onChange={(e) => setMovie({ ...movie, genre: e.target.value })}
          />
          <br />
          <input
            type="number"
            placeholder="Income Value"
            onChange={(e) => setMovie({ ...movie, income: e.target.value })}
          />
          <br />
          <button type="submit" className="btn btn-success">Add Movie</button>
        </form>
        <form className="col" onSubmit={() => editMovie(editedMovie)}>
          <input
            type="text"
            placeholder="Movie Name"
            value={editedMovie.name}
            onChange={(e) =>
              setEditedMovie({ ...editedMovie, name: e.target.value })
            }
          />
          <br />
          <input
            type="number"
            placeholder="Release Year"
            value={editedMovie.year}
            onChange={(e) =>
              setEditedMovie({ ...editedMovie, year: e.target.value })
            }
          />
          <br />
          <input
            type="text"
            placeholder="Genre"
            value={editedMovie.genre}
            onChange={(e) =>
              setEditedMovie({ ...editedMovie, genre: e.target.value })
            }
          />
          <br />
          <input
            type="number"
            placeholder="Income Value"
            value={editedMovie.income}
            onChange={(e) =>
              setEditedMovie({ ...editedMovie, income: e.target.value })
            }
          />
          <br />
          <button type="submit" className="btn btn-warning">Edit Movie</button>
        </form>
        <form className="col" onSubmit={() => addRent(rent)}>
          <input
            type="number"
            placeholder="Movie ID"
            value={rent.movieId}
          />
          <br />
          <input
            type="number"
            placeholder="Duration"
            onChange={(e) => setRent({ ...rent, duration: e.target.value })}
          />
          <br />
          <input
            type="text"
            placeholder="Person"
            onChange={(e) => setRent({ ...rent, person: e.target.value })}
          />
          <br />
          <button type="submit" className="btn btn-danger">Rent Movie</button>
        </form>
      </div>
      <div className="row">
        <div className="col">
          <h1>RENTED MOVIE LIST</h1>
          <table className="table">
            <thead>
              <tr>
                {rentList[0] && rentColumns.map((column) => <th>{column}</th>)}
              </tr>
            </thead>
            <tbody>
              {rentList[0] &&
                rentList.map((rent) => (
                  <tr>
                    {rentColumns.map((column) => (
                      <td>{rent[column]}</td>
                    ))}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
