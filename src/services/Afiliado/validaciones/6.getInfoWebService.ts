import { DatosIngresados } from "../../../interfaces/datos.interface";
import getAfiliado from "../getAfiliado";
import validarTipoDoc from "./7.validarTipoDoc";

const getInfoWebService = async (datos: DatosIngresados) => {
    const {nDocumento, tipoDocumento} = datos
   

    const tipoDoc:number= parseInt(tipoDocumento);

    
    //obtenemos el codigo de la tabla tipo  de documento
    const codigoDoc= await validarTipoDoc(tipoDoc);
    

    //obtenemos la informacion del web service
    const datosWebService= await getAfiliado(codigoDoc, nDocumento);
    
    if(datosWebService!=404){
        return datosWebService
    }else{
        throw new Error("Usuario no encontrado");     
    }
}

export default getInfoWebService
