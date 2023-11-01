import { ErrorI } from "../../../interfaces/error.interfasce";
import { Sede } from "../../../models/Sede";

export const validarIdLocation = async (idSede: string) => {
  try {
    const numberIdSede: number = parseInt(idSede);

    const sede = await Sede.findByPk(numberIdSede);
    if (!sede) {
      throw new Error("Sede no encontrada");
    }

    const id_location = sede.dataValues.id_location;
    return id_location;
  } catch (error) {
    console.error(`Error al buscar id_location en la sede ${idSede}: ${error}`);
    const responseError: ErrorI = {
      error: true,
      message: `${error}`,
      statusCode: 500,
    };
    throw responseError;
  }
};
