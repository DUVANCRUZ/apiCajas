import * as Joi from 'joi';
import { DatosIngresados } from '../../../interfaces/datos.interface';

const schema = Joi.object({
  eMail: Joi.string().email({ tlds: { allow: false } }).required(),
  idPlan: Joi.string().required(),
  idSede: Joi.string().required(),
  nDocumento: Joi.string().required(),
  tipoDocumento: Joi.string().required(),
});

function validarDatos(datos: DatosIngresados): boolean {
  const { error } = schema.validate(datos);
  if (error) {
    const errors=error.details.map((detail) => detail.message)
    console.log(errors)
    throw new Error("Los datos son inválidos");
  } else {
    return true;
  }
}

export default validarDatos;
