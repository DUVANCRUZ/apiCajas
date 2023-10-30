import { DataTypes } from "sequelize";
import { database } from "../connections/database";

export const Sede = database.define(
  "Sede",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    descripcion: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: null,
    },
    id_location: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
  },
  {
    timestamps: false,
    tableName: "Sede",
  }
);
