import { DatosIngresados } from "../../../interfaces/datos.interface";
import { ErrorI } from "../../../interfaces/error.interfasce";
import { WebServiceI } from "../../../interfaces/webService.interface";
import { getAfiliado } from "../getAfiliado";
import { validarTipoDoc } from "./validarTipoDoc";

export const getInfoWebService = async (datos: DatosIngresados) => {
  const { nDocumento, tipoDocumento } = datos;

  const tipoDoc: number = parseInt(tipoDocumento);

  //obtenemos el codigo de la tabla tipo  de documento
  const codigoDoc = await validarTipoDoc(tipoDoc);
  //obtenemos la informacion del web service
  const datosWebService: WebServiceI = await getAfiliado(codigoDoc, nDocumento);

  if (datosWebService.code === 404) {
    const error: string = "Usuario no encontrado";
    console.log(error);
    const responseError: ErrorI = {
      error: true,
      message: `${error}`,
      statusCode: 404,
    };
    throw responseError;
  }
  return datosWebService;
};
