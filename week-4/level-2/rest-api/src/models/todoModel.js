import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("Bloggy", "hicoders", "hicoders_12", {
  host: "localhost",
  dialect: "mysql",
});

const Todo = sequelize.define(
  "Todo",
  {
    id: {
      type: DataTypes.STRING,
      // autoIncrement: true,
      primaryKey: true,
    },
    todo: {
      type: DataTypes.STRING,
    },
    isChecked: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    tableName: "todo_list",
  }
);

export default Todo;
