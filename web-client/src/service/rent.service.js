export const getRentList = async () => {
  try {
    const response = await fetch("http://localhost:3100/rents");
    const res = await response.json();
    return await res["rents"];
  } catch (error) {
    console.log(error);
  }
};
