//Esta funcion inicia el servidor
import { App } from "./app";
import dotenv from "dotenv"


dotenv.config();

function main() { 
    const app= new App(3000);
    app.listen();
}

main()