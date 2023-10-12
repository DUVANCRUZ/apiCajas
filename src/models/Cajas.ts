import { DataTypes } from "sequelize";
import database from "../connections/database";

const Cajas = database.define("Cajas", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true, 
    defaultValue: 1, 
  },
  LoginRequired: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  namebusiness: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  beneficiarioRequired: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  isOnbuilding: {
    type: DataTypes.JSON, 
    allowNull: false,
  },
  isOnProduccion: {
    type: DataTypes.JSON, 
    allowNull: false,
  },
  imgFront: {
    type: DataTypes.JSON, 
    allowNull: false,
  },
  imgComponents: {
    type: DataTypes.JSON, 
    allowNull: false,
  },
  imgBack: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imgCajaSmarfit: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  databusiness: {
    type: DataTypes.JSON, 
    allowNull: false,
  },
});

export default Cajas;