export const getMovieList = async () => {
  try {
    const response = await fetch("http://localhost:3100/movies");
    const res = await response.json();
    return await res["movies"];
  } catch (error) {
    console.log(error);
  }
};
