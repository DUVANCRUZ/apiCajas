import { DataTypes } from "sequelize";
import { database } from "../connections/database";

export const Convenio = database.define(
  "Convenio",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    id_sede: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
    },
    id_afiliado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
    },
    id_plan: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    asignado: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    codigo: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true,
    },
    liberado: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    tipo_tarifa: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: null,
    },
    fecha_registro: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
    },
  },
  {
    timestamps: false,
    tableName: "Convenio",
  }
);
