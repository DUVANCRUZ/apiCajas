import { DatosIngresados } from "../../../interfaces/datos.interface";
import getInfoWebService from "./5.getInfoWebService";

const validarEstadoAfiliacion = async (datos: DatosIngresados) => {
    const datosWebService= await getInfoWebService(datos)
    const {estadoAfiliacion}= datosWebService   
    
    if(!estadoAfiliacion){
        throw new Error("El estado de afiliación es false");
    }

    return datosWebService
};


export default validarEstadoAfiliacion;


