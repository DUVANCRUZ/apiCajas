import { AfiliadoInterface } from "../../../interfaces/afiliado.interface";
import { DatosIngresados } from "../../../interfaces/datos.interface";
import Convenio from "../../../models/Convenio";

const validarAsignacion = async (datos: DatosIngresados, afiliado: AfiliadoInterface, corporativo: boolean) => {
    const { tarifa, numero_doc, id } = afiliado;
    const { idPlan, idSede } = datos;

    // Construye la parte condicional de la consulta de Sequelize en función de 'corporativo'
    const whereCondition = {
        activo: true,
        tipo_tarifa: corporativo ? 'CORPORATIVO' : tarifa
    };

    // Realiza la búsqueda en Convenio
    const asignacion = await Convenio.findOne({
        where: whereCondition
    });

    if (!asignacion) {
        throw new Error("No hay códigos disponibles en este momento");
    }

    const fechaActual = new Date();

    // Actualiza las propiedades del convenio encontrado
    const updatedConvenio = await asignacion.update({
        activo: false,
        id_plan: idPlan,
        id_sede: idSede,
        num_doc_afiliado: numero_doc,
        id_afiliado: id,
        fecha_registro: fechaActual
    });

    console.log(updatedConvenio.dataValues);

    return asignacion.dataValues.codigo;
};

export default validarAsignacion;