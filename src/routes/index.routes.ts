import Router, { Request, Response } from "express";

import { afiliadoRouter } from "./afiliado.routes";
import { projectInfo } from "./projectInfo.routes";

const router = Router();

router.use("/projectInfo", projectInfo);

router.use("/afiliado", afiliadoRouter);
/**
 * respuesta controlada para rutas no encontradas. ¡SIEMPRE EN ULTIMO!
 */
router.use((req: Request, res: Response) => {
  res.status(404).json({
    error: true,
    message: `Route: ${req.url} not found`,
    statusCode: "404",
  });
});

export { router };
