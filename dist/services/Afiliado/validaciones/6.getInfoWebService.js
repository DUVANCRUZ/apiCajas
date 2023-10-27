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
const getAfiliado_1 = __importDefault(require("../getAfiliado"));
const _7_validarTipoDoc_1 = __importDefault(require("./7.validarTipoDoc"));
const getInfoWebService = (datos) => __awaiter(void 0, void 0, void 0, function* () {
    const { nDocumento, tipoDocumento } = datos;
    const tipoDoc = parseInt(tipoDocumento);
    //obtenemos el codigo de la tabla tipo  de documento
    const codigoDoc = yield (0, _7_validarTipoDoc_1.default)(tipoDoc);
    //obtenemos la informacion del web service
    const datosWebService = yield (0, getAfiliado_1.default)(codigoDoc, nDocumento);
    if (datosWebService != 404) {
        return datosWebService;
    }
    else {
        throw new Error("Usuario no encontrado");
    }
});
exports.default = getInfoWebService;
