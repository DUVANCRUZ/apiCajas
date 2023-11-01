import { DatosIngresados } from "../../../interfaces/datos.interface";
import { WebServiceI } from "../../../interfaces/webService.interface";
import { Afiliado } from "../../../models/Afiliado";

export const crearAfiliado = async (
  datos: DatosIngresados,
  datosWeb: WebServiceI
): Promise<any> => {
  const { eMail, nDocumento, tipoDocumento } = datos;
  const {
    nombreUsuario,
    estadoAfiliacion,
    categoria,
    fechaNacimiento,
    generoAfiliado,
  } = datosWeb.data;
  try {
    const afiliado = await Afiliado.create({
      tipo_documento: tipoDocumento,
      numero_doc: nDocumento,
      nombre_completo: nombreUsuario,
      fecha_nacimiento: fechaNacimiento,
      email: eMail,
      genero: generoAfiliado,
      tarifa: categoria,
      estado_afiliado: estadoAfiliacion,
    });
    return afiliado.dataValues;
  } catch (error) {
    throw new Error("Error al buscar convenios");
  }
};
