import { Sequelize } from "sequelize";
import Person from "../models/personModel.js";

const sequelize = new Sequelize("Bloggy", "hicoders", "hicoders_12", {
  host: "localhost",
  dialect: "mysql",
  dialectOptions: {},
  define: {
    freezeTableName: true,
  },
});

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    await Person.sync({ alter: true });
    console.log("Connected!");
  } catch (error) {
    console.log("Error");
  }
};

connectToDatabase();
