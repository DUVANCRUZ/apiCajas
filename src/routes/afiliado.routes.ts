import {
  getAfiladoControllers,
  asignarCodigosController,
} from "../controllers/afiliado.controllers";
import Router from "express";

const afiliadoRouter = Router();

afiliadoRouter.get("/:tipDoc/:doc", getAfiladoControllers);
afiliadoRouter.get("/asignarcodigo", asignarCodigosController);

export { afiliadoRouter };
