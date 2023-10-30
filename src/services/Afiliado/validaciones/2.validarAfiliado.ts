import { DatosIngresados } from "../../../interfaces/datos.interface";
import { Afiliado } from "../../../models/Afiliado";
import { crearAfiliado } from "./3.crearAfiliado";
import { getInfoWebService } from "./6.getInfoWebService";

export const validarAfiliado = async (datos: DatosIngresados) => {
  const { nDocumento } = datos;

  try {
    const afiliado = await Afiliado.findOne({
      where: { numero_doc: nDocumento },
    });

    if (!afiliado) {
      const datosWeb = await getInfoWebService(datos);
      const afiliadoCreado = crearAfiliado(datos, datosWeb);
      console.log(afiliadoCreado);
      return afiliadoCreado;
    }

    return afiliado.dataValues;
  } catch (error) {
    throw new Error("Error al buscar o crear el afiliados");
  }
};
