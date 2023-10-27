"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;
if (!DB_USER || !DB_PASSWORD || !DB_DATABASE) {
    throw new Error("Environment variables are missing. Make sure to configure DB_USER, DB_PASSWORD, and DB_DATABASE in your .env file.");
}
const database = new sequelize_typescript_1.Sequelize({
    dialect: "mysql",
    host: "localhost",
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
});
exports.default = database;
