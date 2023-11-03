import { Sequelize } from "sequelize-typescript";
import { dataBaseConfig } from "../interfaces/dataBase.interface";

if (
  !process.env.DB_ENDPOINT ||
  !process.env.USER_NAME ||
  !process.env.PASSWORD ||
  !process.env.DB_NAME ||
  !process.env.DB_PORT
) {
  const error =
    "Environment variables are missing. Make sure to configure dataBaseConfig in your .env file.";
  console.error(error);

  throw new Error(error);
}
const paramsdataBase: dataBaseConfig = {
  DB_NAME: process.env.DB_NAME as string,
  USER_NAME: process.env.USER_NAME as string,
  PASSWORD: process.env.PASSWORD as string,
  DB_ENDPOINT: process.env.DB_ENDPOINT as string,
  DB_DIALE: "mysql",
  DB_PORT: Number(process.env.DB_PORT),
};

export const database: Sequelize = new Sequelize(
  paramsdataBase.DB_NAME,
  paramsdataBase.USER_NAME,
  paramsdataBase.PASSWORD,
  {
    host: paramsdataBase.DB_ENDPOINT,
    dialect: paramsdataBase.DB_DIALE,
    logging: false,
    port: paramsdataBase.DB_PORT,
  }
);
