import { AfiliadoInterface } from "../../../interfaces/afiliado.interface";
import { DatosIngresados } from "../../../interfaces/datos.interface";
import { reponseInterface } from "../../../interfaces/response.interface";
import validarIdLocation from "./11.validarIdLocation";

export const validarResponse = async (
  afiliado: AfiliadoInterface,
  datos: DatosIngresados,
  codigo: string,
  isAntiguo: boolean
) => {
  try {
    const { nombre_completo, estado_afiliado, tarifa } = afiliado;
    const { eMail, idSede, nDocumento, tipoDocumento } = datos;
    const idLocation = await validarIdLocation(idSede);
    console.log(idLocation);
    const responseData: reponseInterface = {
      availableCodes: true,
      isAntiguo: isAntiguo,
      nombreCompleto: nombre_completo,
      tipoDocumentoIdentidad: tipoDocumento,
      numeroDoc: nDocumento,
      idSede: idSede,
      eMail: eMail,
      estadoAfiliado: estado_afiliado,
      tarifa: tarifa,
      valoresAfiliado: null,
      urlConvenio: `https://www.smartfit.com.co/carts?location_id=${idLocation}&plan=smart&code=${codigo}`,
    };
    return responseData;
  } catch (error) {
    throw new Error("Fallo la asignacion del codigo");
  }
};
