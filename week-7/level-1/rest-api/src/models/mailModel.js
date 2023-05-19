import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("Bloggy", "hicoders", "hicoders_12", {
  host: "localhost",
  dialect: "mysql",
});

const Mail = sequelize.define(
  "Mail",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    maritalStatus: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "reminder-email",
  }
);

export default Mail;
