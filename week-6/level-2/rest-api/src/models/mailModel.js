import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("Bloggy", "hicoders", "hicoders_12", {
  host: "localhost",
  dialect: "mysql",
});

const Mail = sequelize.define(
  "Mail",
  {
    id: {
      type: DataTypes.STRING,
      // autoIncrement: true,
      primaryKey: true,
    },
    mail: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    message: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
  },
  {
    tableName: "mail",
  }
);

export default Mail;
