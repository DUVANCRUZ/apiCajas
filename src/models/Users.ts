import { DataTypes } from "sequelize";
import { database } from "../connections/database";

export const Users = database.define("Users", {
  id_user: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  id_user_role: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING(45),
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  enabled: {
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 1,
  },
});
