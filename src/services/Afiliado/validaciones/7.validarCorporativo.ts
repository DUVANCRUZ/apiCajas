import { DatosWebService } from "../../../interfaces/datosWebService.interface";


const validarCorporativo = async (datosWebService: DatosWebService) => {
    const {afiliadoCorporativo}= datosWebService    
    
    if(!afiliadoCorporativo) return false
    
    return true
};


export default validarCorporativo;

