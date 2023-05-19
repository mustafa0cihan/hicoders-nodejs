import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const personList = [
  {
    id: 1,
    name: "Maxwell",
    surname: "Ryan",
    age: 21,
    maritalStatus: "single",
  },
  {
    id: 2,
    name: "Georgie",
    surname: "Greenwood",
    age: 51,
    maritalStatus: "married",
  },
  {
    id: 3,
    name: "Glen",
    surname: "Frost",
    age: 19,
    maritalStatus: "single",
  },
  {
    id: 4,
    name: "Norris",
    surname: "Manning",
    age: 42,
    maritalStatus: "married",
  },
   {
    id: 5,
    name: "Max",
    surname: "Gill",
    age: 22,
    maritalStatus: "married",
  },
];

//ENDPOINTS
app.get("/person", (req, res) => {
  res.status(200).send(personList);
});

app.get("/person/filter", (req, res) => {
  const gender = req.query.gender;
  const filteredPersonList = personList.filter((person) => {
    return person.maritalStatus === gender;
  });
  res.status(200).send(filteredPersonList);
  
});

app.listen(5000, () => {
  console.log("rest-api running on port 5000");
});
