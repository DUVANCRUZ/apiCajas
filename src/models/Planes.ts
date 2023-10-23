import { DataTypes } from "sequelize";
import database from "../connections/database";

const Planes = database.define("Planes", {
  idplanes: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(45),
    allowNull: false,
  }
  },
  {
    timestamps: false,
    tableName: 'Planes', 
  }
);


export default Planes;
