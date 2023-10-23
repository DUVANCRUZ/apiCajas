//este modulo declara el servidor
import express, { json, Application } from "express";
import morgan from "morgan";
import cors from "cors";
import db from "./connections/database";
import { modelRelation } from "./connections/modelRelation";
import router from "./routes";

export class App {
    private app: Application;

    constructor (private port?: number | string )  { 
        this.app = express();
        this.settings();
        this.middlewares();
        this.dbConection();
        this.relationSync();
        this.routes();
    
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
        await db.authenticate();
        console.log("Database conected");

    }

   relationSync(){
        modelRelation();
    }
    routes(){
        this.app.use('/', router); 
    }
}