import { AfiliadoInterface } from "../../../interfaces/afiliado.interface";
import Convenio from "../../../models/Convenio"; 

const validarAntiguedad = async (afiliado: AfiliadoInterface) => {
 
  try {
    
    const convenio = await Convenio.findOne({
      where: { id_afiliado: afiliado.id },
    });
    
    if(!convenio) {
      return false
    }
      
    return true
    
    } catch (error) {
    throw new Error("Error al buscar convenios");
  }
};

export default validarAntiguedad;
