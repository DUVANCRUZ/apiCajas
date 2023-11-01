import { DatosIngresados } from "../../interfaces/datos.interface";
import { validarAntiguedad } from "./validaciones/validarAntiguedad";
import { validarEstadoAfiliacion } from "./validaciones/validarEstadoAfiliacion";
import { validarAfiliado } from "./validaciones/validarAfiliado";
import { validarCorporativo } from "./validaciones/validarCorporativo";
import { validarAsignacionCodigo } from "./validaciones/validarAsignacion";
import { validarResponse } from "./validaciones/validarResponse";
import { WebServiceI } from "../../interfaces/webService.interface";
import { getInfoWebService } from "./validaciones/getInfoWebService";
import { validarSede } from "./validaciones/validarSede";
import { validarPlan } from "./validaciones/validarPlan";
import { ReponseI } from "../../interfaces/response.interface";

export const asignarCodigos = async (
  datos: DatosIngresados
): Promise<ReponseI> => {
  // consulta webService
  const datosWebService: WebServiceI = await getInfoWebService(datos);

  //validamos existencia de afiliado en base de datos
  const afiliado = await validarAfiliado(datos, datosWebService);

  const id_location = await validarSede(datos);
  const corporativo = await validarCorporativo(datosWebService);
  if (corporativo) {
    afiliado.tarifa = process.env.TYPO_TARIFA_CORPORATIVO as string;
  }
  const antiguedad = await validarAntiguedad(afiliado);

  if (antiguedad) {
    const response = validarResponse(
      afiliado,
      datos,
      antiguedad,
      id_location,
      true
    );
    return response;
  }

  await validarPlan(datos);
  await validarEstadoAfiliacion(datosWebService);

  const asignacionCodigo = await validarAsignacionCodigo(datos, afiliado);

  const response = validarResponse(
    afiliado,
    datos,
    asignacionCodigo,
    id_location,
    false
  );
  return response;
};
