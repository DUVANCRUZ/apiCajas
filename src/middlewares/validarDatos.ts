import { NextFunction, Request, Response } from "express";
import Joi from "joi";
import { DatosIngresados } from "../interfaces/datos.interface";
import { ErrorI } from "../interfaces/error.interfasce";

const schema: Joi.Schema<DatosIngresados> = Joi.object({
  eMail: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  idPlan: Joi.string().required(),
  idSede: Joi.string().required(),
  nDocumento: Joi.string().required(),
  tipoDocumento: Joi.string().required(),
});

export const validarDatos = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const datos: DatosIngresados = req.body;
  const { error } = schema.validate(datos);
  if (error) {
    const errors = error.details.map((detail) => detail.message);
    const responseError: ErrorI = {
      error: true,
      message: errors[0],
      statusCode: 401,
    };
    res.status(responseError.statusCode).json(responseError);
    return;
  }
  next();
};
