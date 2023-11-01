import { AfiliadoI } from "../../../interfaces/afiliado.interface";
import { ErrorI } from "../../../interfaces/error.interfasce";
import { Convenio } from "../../../models/Convenio";

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
    console.log("Error al buscar convenios", error);
    const responseError: ErrorI = {
      error: true,
      message: `${error}`,
      statusCode: 500,
    };
    throw responseError;
  }
};
