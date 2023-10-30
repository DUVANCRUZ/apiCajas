import { AfiliadoInterface } from "../../../interfaces/afiliado.interface";
import { DatosIngresados } from "../../../interfaces/datos.interface";
import { ErrorI } from "../../../interfaces/error.interfasce";
import { WebServiceI } from "../../../interfaces/webService.interface";
import { Afiliado } from "../../../models/Afiliado";
import { crearAfiliado } from "./3.crearAfiliado";
import { getInfoWebService } from "./6.getInfoWebService";

export const validarAfiliado = async (datos: DatosIngresados) => {
  const { nDocumento } = datos;

  try {
    const afiliado = await Afiliado.findOne({
      where: { numero_doc: nDocumento },
    });

    if (!afiliado) {
      const datosWeb: WebServiceI = await getInfoWebService(datos);
      const afiliadoCreado = crearAfiliado(datos, datosWeb);
      console.log("From_AF", afiliadoCreado);
      return afiliadoCreado;
    }

    return afiliado.dataValues;
  } catch (error: ErrorI | any) {
    throw error;
  }
};
