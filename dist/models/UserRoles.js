"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../connections/database"));
const UserRoles = database_1.default.define("User_roles", {
    user_role_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    role: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false,
    }
}, {
    timestamps: false,
    tableName: 'user_roles',
});
exports.default = UserRoles;
