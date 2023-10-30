import { DataTypes } from "sequelize";
import { database } from "../connections/database";

export const Planes = database.define(
  "Planes",
  {
    idplanes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: "Planes",
  }
);
