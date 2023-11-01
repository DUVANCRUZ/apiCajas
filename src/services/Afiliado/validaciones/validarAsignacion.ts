import {
  AfiliadoI,
  obtenerConvenio,
} from "../../../interfaces/afiliado.interface";
import { DatosIngresados } from "../../../interfaces/datos.interface";
import { ErrorI } from "../../../interfaces/error.interfasce";
import { Convenio } from "../../../models/Convenio";

export const validarAsignacionCodigo = async (
  datos: DatosIngresados,
  afiliado: AfiliadoI
) => {
  try {
    const { tarifa, id } = afiliado;
    const { idPlan, idSede } = datos;
    const fechaActual = new Date();

    const whereCondition = {
      asignado: 0,
      liberado: 0,
      id_afiliado: null,
      fecha_registro: null,
      id_sede: null,
      id_plan: idPlan,
      tipo_tarifa: tarifa,
    };
    // Actualiza las propiedades del convenio encontrado
    const updatedConvenio = await Convenio.update(
      {
        asignado: 1,
        id_afiliado: id,
        id_sede: idSede,
        fecha_registro: fechaActual,
      },
      {
        where: whereCondition,
        returning: false,
        limit: 1,
      }
    );
    // console.log("Form:UP", updatedConvenio);
    if (updatedConvenio[0] === 0) {
      throw new Error("No hay códigos disponibles en este momento");
    }

    const whereConvenio = {
      id_afiliado: id,
      asignado: 1,
      liberado: 0,
    };
    // Realiza la búsqueda en Convenio
    const asignacion = await Convenio.findOne({
      where: whereConvenio,
    });
    // console.log("Form:AS", asignacion);

    if (asignacion === null) {
      throw new Error("Error obteniendo codigo del afiliado");
    }
    return asignacion.dataValues.codigo;
  } catch (error) {
    console.log("Error encontrando codigos", error);
    const responseError: ErrorI = {
      error: true,
      message: `${error}`,
      statusCode: 404,
    };
    throw responseError;
  }
};
