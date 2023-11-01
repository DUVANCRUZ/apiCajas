import { server } from "../index";

import Router from "express";
import { Request, Response } from "express";

const projectInfo = Router();

/**
 * @swagger
 * /api/projectInfo:
 *   get:
 *     tags:
 *       - projectInfo
 *     summary: "Obtener la información del proyecto"
 *     description: "Este endpoint permite obtener la información del proyecto, incluyendo la versión y los datos de desarrollo."
 *     responses:
 *       200:
 *         description: "Documentación recuperada con éxito"
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/projectInfo"
 *       404:
 *         description: "No se pudo obtener la información"
 *       500:
 *         description: "Error interno del servidor"
 */


projectInfo.get("/", async (req: Request, res: Response): Promise<Response> => {
  const getProjectInfo = server;
  return res.status(200).json(await getProjectInfo.projectInfo());
});

export { projectInfo };
