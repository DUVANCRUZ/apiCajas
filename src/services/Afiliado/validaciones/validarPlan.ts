import { DatosIngresados } from "../../../interfaces/datos.interface";
import { ErrorI } from "../../../interfaces/error.interfasce";
import { Planes } from "../../../models/Planes";
import logger from "../../../utils/logger";

export const validarPlan = async (datos: DatosIngresados): Promise<void> => {
  try {
    const plan = await Planes.findOne({
      where: { idplanes: datos.idPlan },
    });
    if (!plan) {
      throw new Error(`No existe la plan que estas asignando`);
    }
  } catch (error) {
    logger.error(error);
    const responseError: ErrorI = {
      error: true,
      message: `${error}`,
      statusCode: 404,
    };
    throw responseError;
  }
};
