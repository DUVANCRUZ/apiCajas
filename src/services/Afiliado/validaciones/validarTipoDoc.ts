import { ErrorI } from "../../../interfaces/error.interfasce";
import { TipoDocumentoIdentidad } from "../../../models/TipoDocumentoIdentidad";
import logger from "../../../utils/logger";

export const validarTipoDoc = async (tipoDoc: number) => {
  //console.log(tipoDoc)

  try {
    const tipoDocumento = await TipoDocumentoIdentidad.findByPk(tipoDoc);
    if (!tipoDocumento) {
      throw new Error("Tipo de documento no encontrado");
    }
    const codigoDoc = tipoDocumento.dataValues.codigo;
    return codigoDoc;
  } catch (error) {
    logger.error("Error al buscar el tipo de documento: " + error);

    const responseError: ErrorI = {
      error: true,
      message: `${error}`,
      statusCode: 404,
    };
    throw responseError;
  }
};
