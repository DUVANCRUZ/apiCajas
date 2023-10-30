import { DataTypes } from "sequelize";
import { database } from "../connections/database";

export const AfiliadoBeneficiario = database.define(
  "Afiliado_Beneficiario",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    id_afiliado_cotizante: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    id_afiliado_beneficiario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
  },
  {
    timestamps: false,
    tableName: "afiliado_beneficiario",
  }
);
