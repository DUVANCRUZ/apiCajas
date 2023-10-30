import { Handler, NextFunction, Request, Response } from "express";
import * as Joi from "joi";
import { DatosIngresados } from "../interfaces/datos.interface";

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
    console.log(errors);
    res.status(401).json({ error: errors[0] });
    return;
  }
  next();
};
