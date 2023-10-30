import { DatosIngresados } from "../../../interfaces/datos.interface";
import { WebServiceI } from "../../../interfaces/webService.interface";
import { getInfoWebService } from "./6.getInfoWebService";

export const validarEstadoAfiliacion = async (datos: DatosIngresados) => {
  const datosWebService: WebServiceI = await getInfoWebService(datos);
  const { estadoAfiliacion } = datosWebService.data;

  if (!estadoAfiliacion) {
    throw new Error("El estado de afiliación es false");
  }
  return datosWebService;
};
