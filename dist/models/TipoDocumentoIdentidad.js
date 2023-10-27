"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../connections/database"));
const TipoDocumentoIdentidad = database_1.default.define("tipo_documento_identidad", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    codigo: {
        type: sequelize_1.DataTypes.STRING(4),
        allowNull: false,
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false,
    }
}, {
    timestamps: false,
    tableName: 'tipo_documento_identidad',
});
exports.default = TipoDocumentoIdentidad;
