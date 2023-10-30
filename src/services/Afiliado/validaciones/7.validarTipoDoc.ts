import { TipoDocumentoIdentidad } from "../../../models/TipoDocumentoIdentidad";

export const validarTipoDoc = async (tipoDoc: number) => {
  //console.log(tipoDoc)

  try {
    const tipoDocumento = await TipoDocumentoIdentidad.findByPk(tipoDoc);
    console.log(tipoDocumento);

    if (!tipoDocumento) {
      throw new Error("Tipo de documento no encontrado");
    }

    const codigoDoc = tipoDocumento.dataValues.codigo;
    return codigoDoc;
  } catch (error) {
    console.error("Error al buscar el tipo de documento:", error);
    return "Error";
  }
};
