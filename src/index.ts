//Esta funcion inicia el servidor
import "dotenv/config";
import { App } from "./app";

export const server = new App(process.env.PORT as string);
server.listen();
