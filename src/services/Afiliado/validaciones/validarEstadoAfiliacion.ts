import { ErrorI } from "../../../interfaces/error.interfasce";
import { WebServiceI } from "../../../interfaces/webService.interface";

export const validarEstadoAfiliacion = async (datos: WebServiceI) => {
  const { estadoAfiliacion } = datos.data;

  if (!estadoAfiliacion) {
    const error: string = "El estado de afiliación es false";
    console.log(error);
    const responseError: ErrorI = {
      error: true,
      message: `${error}`,
      statusCode: 401,
    };
    throw responseError;
  }
  return estadoAfiliacion;
};
