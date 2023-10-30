//Esta funcion inicia el servidor
import { App } from "./app";
import dotenv from "dotenv";
dotenv.config();

export const server = new App(process.env.PORT as string);
server.listen();
