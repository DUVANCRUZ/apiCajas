import { AfiliadoI } from "../../../interfaces/afiliado.interface";
import { DatosIngresados } from "../../../interfaces/datos.interface";
import { ErrorI } from "../../../interfaces/error.interfasce";
import { WebServiceI } from "../../../interfaces/webService.interface";
import { Afiliado } from "../../../models/Afiliado";
import { crearAfiliado } from "./crearAfiliado";

export const validarAfiliado = async (
  datos: DatosIngresados,
  datosWebService: WebServiceI
): Promise<AfiliadoI> => {
  const { nDocumento } = datos;

  try {
    const afiliado = await Afiliado.findOne({
      where: { numero_doc: nDocumento },
    });

    if (!afiliado) {
      const afiliadoCreado = crearAfiliado(datos, datosWebService);
      return afiliadoCreado;
    }
    // console.log("From_AF", afiliado.dataValues);
    return afiliado.dataValues;
  } catch (error: ErrorI | any) {
    console.log("Error creando el afiliado", error);
    const responseError: ErrorI = {
      error: true,
      message: `${error}`,
      statusCode: 500,
    };
    throw responseError;
  }
};
