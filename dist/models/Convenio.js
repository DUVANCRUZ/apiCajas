"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../connections/database"));
const Convenio = database_1.default.define("Convenio", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    id_sede: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null
    },
    id_afiliado: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null
    },
    id_plan: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
    },
    asignado: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
    },
    codigo: {
        type: sequelize_1.DataTypes.STRING(30),
        allowNull: false,
        unique: true,
    },
    liberado: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false
    },
    tipo_tarifa: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: true,
        defaultValue: null
    },
    fecha_registro: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
        defaultValue: null
    }
}, {
    timestamps: false,
    tableName: 'Convenio',
});
exports.default = Convenio;
