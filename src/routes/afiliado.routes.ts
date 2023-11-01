import {
  getAfiladoControllers,
  asignarCodigosController,
} from "../controllers/afiliado.controllers";
import Router from "express";
import { validarDatos } from "../middlewares/validarDatos";

const afiliadoRouter = Router();

/**
 * Post track
 * @swagger
 * /api/afiliado/{tipDoc}/{doc}:
 *   get:
 *     tags:
 *       - afiliado
 *     summary: "Obtener afiliado por tipo de documento y número de documento"
 *     description: "Este endpoint permite obtener un afiliado según el tipo de documento y el número de documento proporcionados."
 *     parameters:
 *       - in: path
 *         name: tipDoc
 *         required: true
 *         schema:
 *           type: string
 *         description: "Tipo de documento del afiliado"
 *       - in: path
 *         name: doc
 *         required: true
 *         schema:
 *           type: string
 *         description: "Número de documento del afiliado"
 *     responses:
 *       "200":
 *         description: "Afiliado encontrado con éxito"
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/responseWebService"
 *       "404":
 *         description: "Afiliado no encontrado"
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/errorWebService"
 *       "500":
 *         description: "Error interno del servidor"
 *     security:
 *       - bearerAuth: []
 */

afiliadoRouter.get("/:tipDoc/:doc", getAfiladoControllers);

/**
 * Post track
* @swagger
* /api/afiliado/asignarcodigo:
*   post:
*     tags:
*       - afiliado
*     summary: "Asignar códigos"
*     description: "Este endpoint permite asignar un código a los usuarios o validar si ya tienen un código asignado"
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: "#/components/schemas/datosIngresados"
*     responses:
*       "200":
*         description: "Respuesta exitosa"
*         content:
*           application/json:
*             schema:
*               $ref: "#/components/schemas/responseAsignacionCodigo"
*
*       "400":
*         description: "Hubo un error al validar o asignar el código"
*     security:
*       - bearerAuth: []
 */
afiliadoRouter.post("/asignarcodigo", [validarDatos], asignarCodigosController);

export { afiliadoRouter };
