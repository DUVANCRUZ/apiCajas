import { DatosWebService } from "../../../interfaces/datosWebService.interface";
import { WebServiceI } from "../../../interfaces/webService.interface";

export const validarCorporativo = async (datosWebService: WebServiceI) => {
  const { afiliadoCorporativo } = datosWebService.data;

  if (!afiliadoCorporativo) return false;

  return true;
};
