import { DataTypes } from "sequelize";
import database from "../connections/database";

const Convenio = database.define("Convenio", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  id_sede: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  id_afiliado: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  id_plan: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
  activo: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  codigo: {
    type: DataTypes.STRING(30),
    allowNull: false,
    unique: true,
  },
  num_doc_afiliado: {
    type: DataTypes.STRING(12),
    allowNull: true,
  },
  tipo_tarifa: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
  fecha_registro: {
    type: DataTypes.DATE,
    allowNull: true,
  }
  },
  {
    timestamps: false,
    tableName: 'Convenio', 
  }
);




export default Convenio;