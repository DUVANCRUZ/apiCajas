"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../connections/database"));
const AfiliadoBeneficiario = database_1.default.define("Afiliado_Beneficiario", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    id_afiliado_cotizante: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    id_afiliado_beneficiario: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        unique: true,
    }
}, {
    timestamps: false,
    tableName: 'afiliado_beneficiario',
});
exports.default = AfiliadoBeneficiario;
