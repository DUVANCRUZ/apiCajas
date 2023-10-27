"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../connections/database"));
const Users = database_1.default.define("Users", {
    id_user: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    id_user_role: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    username: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false,
        unique: true,
    },
    password: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false,
    },
    enabled: {
        type: sequelize_1.DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 1,
    },
});
exports.default = Users;
