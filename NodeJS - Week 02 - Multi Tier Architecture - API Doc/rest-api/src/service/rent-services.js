import * as rentRepository from "../data/rentList-repository.js";

// get
export const getRents = () => {
  const rents = rentRepository.getRentList();
  return rents;
};

// post
export const addRent = (pRent) => {
  const rents = rentRepository.createRent(pRent);
  return rents;
};
