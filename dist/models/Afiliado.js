"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../connections/database"));
const Afiliado = database_1.default.define("Afiliado", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    tipo_documento: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null
    },
    numero_doc: {
        type: sequelize_1.DataTypes.STRING(30),
        allowNull: false,
        unique: true,
    },
    nombre_completo: {
        type: sequelize_1.DataTypes.STRING(80),
        allowNull: true,
        defaultValue: null
    },
    fecha_nacimiento: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
        defaultValue: null
    },
    email: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: true,
        defaultValue: null
    },
    genero: {
        type: sequelize_1.DataTypes.STRING(11),
        allowNull: true,
        defaultValue: null
    },
    tarifa: {
        type: sequelize_1.DataTypes.STRING(1),
        allowNull: true,
        defaultValue: null
    },
    estado_afiliado: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: null
    },
    descripcion_estado: {
        type: sequelize_1.DataTypes.STRING(20),
        allowNull: true,
        defaultValue: null
    }
}, {
    timestamps: false,
    tableName: 'Afiliado',
});
exports.default = Afiliado;
