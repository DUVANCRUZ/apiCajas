"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../connections/database"));
const Sede = database_1.default.define("Sede", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: true,
        defaultValue: null
    },
    id_location: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        unique: true,
    }
}, {
    timestamps: false,
    tableName: 'Sede',
});
exports.default = Sede;
