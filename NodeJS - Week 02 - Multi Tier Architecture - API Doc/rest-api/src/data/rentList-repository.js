const rentList = [
  {
    movieId: 10002,
    duration: 10,
    person: "Hi Coders"
  },
  {
    movieId: 10003,
    duration: 20,
    person: "Mustafa"
  },
  {
    movieId: 10004,
    person: "Tolga",
    duration: "30"
  },
  {
    movieId: 10005,
    duration: "19",
    person: "Kaan"
  }
];

// get
export const getRentList = () => {
  return rentList;
};

// post
export const createRent = (pRent) => {
  rentList.push(pRent);
  return rentList;
};