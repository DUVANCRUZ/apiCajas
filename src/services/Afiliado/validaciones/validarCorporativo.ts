import { ErrorI } from "../../../interfaces/error.interfasce";
import { WebServiceI } from "../../../interfaces/webService.interface";
import logger from "../../../utils/logger";


export const validarCorporativo = async (
  datosWebService: WebServiceI
): Promise<boolean> => {
  try {
    const { afiliadoCorporativo } = datosWebService.data;

    if (!afiliadoCorporativo) return false;

    return true;
  } catch (error) {
    logger.error("Error al validar afiliadoCorporativo: " + error);
    const responseError: ErrorI = {
      error: true,
      message: `${error}`,
      statusCode: 500,
    };
    throw responseError;
  }
};
