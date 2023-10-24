import Sede from "../../../models/Sede";



const validarIdLocation = async (idSede: string) => {
   
    
    try {
        const numberIdSede:number = parseInt(idSede)
        
        const sede = await Sede.findByPk(numberIdSede);
        console.log(sede)

        if (!sede) {
            throw new Error("Sede no encontrada");
        }       
  
        const id_sede= sede.dataValues.id_location; 
        return id_sede;
        
    } catch (error) {
        
        console.error("Error al buscar el tipo de documento:", error);
        return "Error";
    }

}

export default validarIdLocation