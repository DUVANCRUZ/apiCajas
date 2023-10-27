"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Convenio_1 = __importDefault(require("../../../models/Convenio"));
const validarAsignacion = (datos, afiliado, corporativo) => __awaiter(void 0, void 0, void 0, function* () {
    const { tarifa, numero_doc, id } = afiliado;
    const { idPlan, idSede } = datos;
    // Construye la parte condicional de la consulta de Sequelize en función de 'corporativo'
    const whereCondition = {
        asignado: 0,
        tipo_tarifa: corporativo ? 'CORPORATIVO' : tarifa,
        id_afiliado: null
    };
    // Realiza la búsqueda en Convenio
    const asignacion = yield Convenio_1.default.findOne({
        where: whereCondition
    });
    if (!asignacion) {
        throw new Error("No hay códigos disponibles en este momento");
    }
    const fechaActual = new Date();
    // Actualiza las propiedades del convenio encontrado
    const updatedConvenio = yield asignacion.update({
        asignado: 1,
        id_plan: idPlan,
        id_sede: idSede,
        num_doc_afiliado: numero_doc,
        id_afiliado: id,
        fecha_registro: fechaActual
    });
    console.log(updatedConvenio.dataValues);
    return asignacion.dataValues.codigo;
});
exports.default = validarAsignacion;
