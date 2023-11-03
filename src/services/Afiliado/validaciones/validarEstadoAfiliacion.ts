import { ErrorI } from "../../../interfaces/error.interfasce";
import { WebServiceI } from "../../../interfaces/webService.interface";
import logger from "../../../utils/logger";


export const validarEstadoAfiliacion = async (datos: WebServiceI) => {
  const { estadoAfiliacion } = datos.data;

  if (!estadoAfiliacion) {
    const error: string = "El estado de afiliación es false";
    logger.error(error);
    const responseError: ErrorI = {
      error: true,
      message: `${error}`,
      statusCode: 401,
    };
    throw responseError;
  }
  return estadoAfiliacion;
};
