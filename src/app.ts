//este modulo declara el servidor
import express, { json, Application } from "express";
import morgan from "morgan";
import cors from "cors";
import database from "./connections/database";
import { modelRelation } from "./connections/modelRelation";


export class App {
    private app: Application;

    constructor (private port?: number | string )  { 
        this.app = express();
        this.settings();
        this.middlewares();
        this.dbConection();
        this.relationSync();
    
    }

    settings(){
        this.app.set("port", process.env.PORT || this.port || 3000);
        
    }

    middlewares(){
        this.app.use(morgan("dev"));
        this.app.use(cors());
        this.app.use(json());
    }

    listen(){ 
        this.app.listen(this.app.get("port"));
        console.log("Server in port", this.app.get("port"));
    }

    async dbConection(){
        await database.authenticate();
        console.log("Database conected");

    }

    relationSync(){
        modelRelation();
    }
}