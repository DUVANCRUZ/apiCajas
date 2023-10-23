import { DatosIngresados } from "../../../interfaces/datos.interface";
import Afiliado from "../../../models/Afiliado"; 


const validarAfiliado = async (datos: DatosIngresados) => {
  const { nDocumento } = datos;

  try {
    const afiliado = await Afiliado.findOne({
      where: { numero_doc: nDocumento },
    });
  
    if (!afiliado) {
        throw new Error("No se encontro afiliado");
    }
       
    return afiliado.dataValues

    } 
    catch (error) {
    throw new Error("Error al buscar afiliados o convenios");
    }
};

export default validarAfiliado;
