export const getMovieList = async () => {
  try {
    const response = await fetch("http://localhost:4000/movies");
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
