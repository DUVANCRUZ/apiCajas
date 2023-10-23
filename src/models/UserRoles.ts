import { DataTypes } from "sequelize";
import database from "../connections/database";

const UserRoles = database.define("User_roles", {
  user_role_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING(45),
    allowNull: false,
    unique: true,
  },
  role: {
    type: DataTypes.STRING(45),
    allowNull: false,
  }
  },
  {
    timestamps: false,
    tableName: 'user_roles', 
  }
);

export default UserRoles;
