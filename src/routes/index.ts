import Router from "express";
import { afiliadoRouter } from "./afiliado.routes";
import { projectInfo } from "./projectInfo.routes";

const router = Router();

router.use("/projectInfo", projectInfo);

router.use("/afiliado", afiliadoRouter);

export { router };
