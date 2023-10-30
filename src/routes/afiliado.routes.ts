import {
  getAfiladoControllers,
  asignarCodigosController,
} from "../controllers/afiliado.controllers";
import Router from "express";
import { validarDatos } from "../middlewares/validarDatos";

const afiliadoRouter = Router();

afiliadoRouter.get("/:tipDoc/:doc", getAfiladoControllers);
afiliadoRouter.post("/asignarcodigo", [validarDatos], asignarCodigosController);

export { afiliadoRouter };
