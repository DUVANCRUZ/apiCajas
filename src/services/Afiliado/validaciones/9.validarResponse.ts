import { AfiliadoInterface } from "../../../interfaces/afiliado.interface";
import { DatosIngresados } from "../../../interfaces/datos.interface";
import { reponseInterface } from "../../../interfaces/response.interface";

const validarResponse = async (afiliado:AfiliadoInterface, datos:DatosIngresados, antiguedad:boolean) => {
  
    try {
        const {nombre_completo, estado_afiliado, tarifa}=afiliado;
        const {eMail, idSede, nDocumento, tipoDocumento}= datos
        const responseData: reponseInterface=
        {
            availableCodes: true,
            isAntiguo: antiguedad,
            nombreCompleto: nombre_completo,
            tipoDocumentoIdentidad: tipoDocumento,
            numeroDoc: nDocumento,
            idSede: idSede,
            eMail: eMail,
            estadoAfiliado: estado_afiliado,
            tarifa: tarifa,
            valoresAfiliado: null,
            urlConvenio: "https://www.smartfit.com.co/carts?location_id=839&plan=smart&code=227JX9MW2R"
        }
        return responseData
    } catch (error) {
        throw new Error("Fallo la asignacion del codigo");
      }
   
        

   

};


export default validarResponse;

