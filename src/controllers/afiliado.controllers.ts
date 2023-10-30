import { Request, Response, Handler } from "express";
import { getAfiliado } from "../services/Afiliado/getAfiliado";
import { asignarCodigos } from "../services/Afiliado/asignarCodigos";
import { ErrorI } from "../interfaces/error.interfasce";
import { errorResponse } from "../services/error.service";

export const getAfiladoControllers: Handler = async (
  req: Request,
  res: Response
) => {
  const { tipDoc, doc } = req.params;

  try {
    const response = await getAfiliado(tipDoc, doc);
    return res.status(200).json(response);
  } catch (error: any) {
    return res.status(400).send(error);
  }
};

export const asignarCodigosController: Handler = async (
  req: Request,
  res: Response
) => {
  const datos = req.body;
  try {
    const response = await asignarCodigos(datos);
    return res.status(200).json(response);
  } catch (error: ErrorI | any) {
    errorResponse(error, res);
  }
};
