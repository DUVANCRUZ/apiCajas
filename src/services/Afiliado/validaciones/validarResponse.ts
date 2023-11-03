import { AfiliadoI } from "../../../interfaces/afiliado.interface";
import { DatosIngresados } from "../../../interfaces/datos.interface";
import { ReponseI } from "../../../interfaces/response.interface";
import { ErrorI } from "../../../interfaces/error.interfasce";
import logger from "../../../utils/logger";


export const validarResponse = async (
  afiliado: AfiliadoI,
  datos: DatosIngresados,
  codigo: string,
  idLocation: number,
  isAntiguo: boolean
): Promise<ReponseI> => {
  try {
    const { URL_DOMAIN_SMART_FIT } = process.env;
    const { nombre_completo, estado_afiliado, tarifa } = afiliado;
    const { eMail, idSede, nDocumento, tipoDocumento } = datos;
    const responseData: ReponseI = {
      availableCodes: true,
      isAntiguo: isAntiguo,
      nombreCompleto: nombre_completo,
      tipoDocumentoIdentidad: tipoDocumento,
      numeroDoc: nDocumento,
      idSede: idSede,
      eMail: eMail,
      estadoAfiliado: estado_afiliado,
      tarifa: tarifa,
      valoresAfiliado: "",
      urlConvenio: `${URL_DOMAIN_SMART_FIT}?location_id=${idLocation}&plan=smart&code=${codigo}`,
    };
    return responseData;
  } catch (error) {
    logger.error("Error generando respuesta " + error);
    const responseError: ErrorI = {
      error: true,
      message: `${error}`,
      statusCode: 500,
    };
    throw responseError;
  }
};
