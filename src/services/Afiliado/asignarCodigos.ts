import { DatosIngresados } from "../../interfaces/datos.interface";
import validarAntiguedad from "./validaciones/3.validarAntiguedad";
import validarDatos from "./validaciones/1.validarDatos";
import validarEstadoAfiliacion from "./validaciones/4.validarEstadoAfiliacion";
import validarAfiliado from "./validaciones/2.validarAfiliado";
import validarCorporativo from "./validaciones/7.validarCorporativo";
import validarAsignacion from "./validaciones/8.validarAsignacion";
import validarResponse from "./validaciones/9.validarResponse";


const asignarCodigos = async (datos: DatosIngresados) => {
    //validamos dtos 
    const validarDatosI = validarDatos(datos);
    if (!validarDatosI) {
        return validarDatosI;
    }
    //validamos existencia de afiliado en base de datos
    const afiliado= await validarAfiliado(datos)
    
   
    //validamos antiguedad
    const antiguedad = await validarAntiguedad(afiliado);
    
    //si no es antigua hacemo las demas validaciones
    if(!antiguedad){
        //validamos datos en el webservice y el estado de afiliado  
        const datosWeb = await validarEstadoAfiliacion(datos);
        //console.log(datosWeb)

        //validamos si el usuario es corporativo
        const corporativo = await validarCorporativo(datosWeb);
        
        //validamos asignacion
        validarAsignacion(datos, afiliado, corporativo)
    }

    //Mandamos las respuesta al front
    const response= validarResponse(afiliado, datos, antiguedad);
    return response
    
    
}

export default asignarCodigos;


