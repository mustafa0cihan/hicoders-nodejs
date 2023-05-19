import { Sequelize } from "sequelize";
import Mail from "../models/mailModel.js";

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
    await Mail.sync({ force: true });
    console.log("Connected!");
  } catch (error) {
    console.log("Error");
  }
};

connectToDatabase();
