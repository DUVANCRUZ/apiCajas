import { AfiliadoI } from "../../../interfaces/afiliado.interface";
import { ErrorI } from "../../../interfaces/error.interfasce";
import { Convenio } from "../../../models/Convenio";
import logger from "../../../utils/logger";

export const validarAntiguedad = async (afiliado: AfiliadoI) => {
  try {
    const convenio = await Convenio.findOne({
      where: { id_afiliado: afiliado.id, liberado: 0 },
    });
    // console.log("FromCV", convenio);

    if (!convenio) {
      return false;
    }

    return convenio.dataValues.codigo;
  } catch (error) { 
    logger.error("Error al buscar convenios: " + error)
    const responseError: ErrorI = {
      error: true,
      message: `${error}`,
      statusCode: 500,
    };
    throw responseError;
  }
};
