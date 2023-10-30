//este modulo declara el servidor
import express, { json, Application } from "express";
import pkgjson from "../package.json";
import morgan from "morgan";
import cors from "cors";
import { database } from "./connections/database";
import { modelRelation } from "./connections/modelRelation";
import { router } from "./routes";
import { ProjectInfoI } from "./interfaces/projectInfo.interface";

export class App {
  private app: Application;

  constructor(private port?: number | string) {
    this.app = express();
    this.startApp();
  }

  private async startApp(): Promise<void> {
    this.settings();
    this.middlewares();
    await this.dbConection();
    this.relationSync();
    await this.routes();
  }

  private settings(): void {
    this.app.set("port", process.env.PORT || this.port || 3000);
    this.app.set("pkgjson", pkgjson);
  }
  public async projectInfo(): Promise<ProjectInfoI> {
    const pkgjson = await this.app.get("pkgjson");
    return {
      ProjectName: pkgjson.name,
      ProjectDescription: pkgjson.description,
      ProjectCompany: pkgjson.company,
      ProjectDeveloper: pkgjson.developer,
      ProjectDeveloperEmail: pkgjson.email,
      ProjectVersion: pkgjson.version,
    };
  }

  private middlewares(): void {
    this.app.use(morgan("dev"));
    this.app.use(cors());
    this.app.use(json());
  }

  listen(): void {
    this.app.listen(this.app.get("port"));
    console.log("Server in port", this.app.get("port"));
  }

  private async dbConection(): Promise<void> {
    await database.authenticate();
    console.log("Database conected");
  }

  private relationSync(): void {
    modelRelation();
  }
  private async routes(): Promise<void> {
    this.app.use("/api", router);
  }
}
