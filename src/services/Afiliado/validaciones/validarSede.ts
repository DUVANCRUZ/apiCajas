import { Sede } from "../../../models/Sede";
import { DatosIngresados } from "../../../interfaces/datos.interface";
import { ErrorI } from "../../../interfaces/error.interfasce";

export const validarSede = async (datos: DatosIngresados): Promise<number> => {
  try {
    const sede = await Sede.findOne({
      where: { id: datos.idSede },
    });
    if (!sede) {
      throw new Error(`No existe la sede que estas asignando`);
    }
    return sede.dataValues.id_location;
  } catch (error) {
    console.log(error);
    const responseError: ErrorI = {
      error: true,
      message: `${error}`,
      statusCode: 404,
    };
    throw responseError;
  }
};
