import { DatosIngresados } from "../../../interfaces/datos.interface";
import getAfiliado from "../getAfiliado";
import validarTipoDoc from "./6.validarTipoDoc";

const getInfoWebService = async (datos: DatosIngresados) => {
    const {nDocumento, tipoDocumento} = datos
   

    const tipoDoc:number= parseInt(tipoDocumento);
    console.log(tipoDocumento)
    console.log(tipoDoc)
    
    //obtenemos el codigo de la tabla tipo  de documento
    const codigoDoc= await validarTipoDoc(tipoDoc);
    //console.log(codigoDoc)

    //obtenemos la informacion del web service
    const datosWebService= await getAfiliado(codigoDoc, nDocumento);
    
    if(datosWebService!=404){
        return datosWebService
    }else{
        throw new Error("Usuario no encontrado");     
    }
}

export default getInfoWebService
