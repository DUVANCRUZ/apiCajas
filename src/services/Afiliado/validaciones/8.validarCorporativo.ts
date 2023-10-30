import { DatosWebService } from "../../../interfaces/datosWebService.interface";

export const validarCorporativo = async (datosWebService: DatosWebService) => {
  const { afiliadoCorporativo } = datosWebService;

  if (!afiliadoCorporativo) return false;

  return true;
};
