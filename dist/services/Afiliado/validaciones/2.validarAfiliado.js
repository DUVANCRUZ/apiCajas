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
const Afiliado_1 = __importDefault(require("../../../models/Afiliado"));
const _3_crearAfiliado_1 = __importDefault(require("./3.crearAfiliado"));
const _6_getInfoWebService_1 = __importDefault(require("./6.getInfoWebService"));
const validarAfiliado = (datos) => __awaiter(void 0, void 0, void 0, function* () {
    const { nDocumento } = datos;
    try {
        const afiliado = yield Afiliado_1.default.findOne({
            where: { numero_doc: nDocumento },
        });
        if (!afiliado) {
            const datosWeb = yield (0, _6_getInfoWebService_1.default)(datos);
            const afiliadoCreado = (0, _3_crearAfiliado_1.default)(datos, datosWeb);
            console.log(afiliadoCreado);
            return afiliadoCreado;
        }
        return afiliado.dataValues;
    }
    catch (error) {
        throw new Error("Error al buscar o crear el afiliados");
    }
});
exports.default = validarAfiliado;
