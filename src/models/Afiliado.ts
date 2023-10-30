import { DataTypes } from "sequelize";
import { database } from "../connections/database";

export const Afiliado = database.define(
  "Afiliado",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tipo_documento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
    },
    numero_doc: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true,
    },
    nombre_completo: {
      type: DataTypes.STRING(80),
      allowNull: true,
      defaultValue: null,
    },
    fecha_nacimiento: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: null,
    },
    genero: {
      type: DataTypes.STRING(11),
      allowNull: true,
      defaultValue: null,
    },
    tarifa: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: null,
    },
    estado_afiliado: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
    },
    descripcion_estado: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: null,
    },
  },
  {
    timestamps: false,
    tableName: "Afiliado",
  }
);
