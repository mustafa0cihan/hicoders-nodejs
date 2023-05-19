import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("Bloggy", "hicoders", "hicoders_12", {
  host: "localhost",
  dialect: "mysql",
});

const Person = sequelize.define(
  "Person",
  {
    id: {
      type: DataTypes.STRING,
      // autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    surname: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    mail: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    maritalStatus: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
  },
  {
    tableName: "user",
  }
);

export default Person;
