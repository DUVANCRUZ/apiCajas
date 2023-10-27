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
const _4_validarAntiguedad_1 = __importDefault(require("./validaciones/4.validarAntiguedad"));
const _1_validarDatos_1 = __importDefault(require("./validaciones/1.validarDatos"));
const _5_validarEstadoAfiliacion_1 = __importDefault(require("./validaciones/5.validarEstadoAfiliacion"));
const _2_validarAfiliado_1 = __importDefault(require("./validaciones/2.validarAfiliado"));
const _8_validarCorporativo_1 = __importDefault(require("./validaciones/8.validarCorporativo"));
const _9_validarAsignacion_1 = __importDefault(require("./validaciones/9.validarAsignacion"));
const _10_validarResponse_1 = __importDefault(require("./validaciones/10.validarResponse"));
const asignarCodigos = (datos) => __awaiter(void 0, void 0, void 0, function* () {
    //validamos dtos 
    const validarDatosI = (0, _1_validarDatos_1.default)(datos);
    if (!validarDatosI) {
        return validarDatosI;
    }
    //validamos existencia de afiliado en base de datos
    const afiliado = yield (0, _2_validarAfiliado_1.default)(datos);
    //validamos antiguedad si es antiguo traemos el codigo relacionado 
    const antiguedad = yield (0, _4_validarAntiguedad_1.default)(afiliado);
    //si no es antigua hacemo las demas validaciones
    if (!antiguedad) {
        //validamos datos en el webservice y el estado de afiliado  
        const datosWeb = yield (0, _5_validarEstadoAfiliacion_1.default)(datos);
        //console.log(datosWeb)
        //validamos si el usuario es corporativo
        const corporativo = yield (0, _8_validarCorporativo_1.default)(datosWeb);
        //validamos asignacion
        const asignacion = yield (0, _9_validarAsignacion_1.default)(datos, afiliado, corporativo);
        //Mandamos las respuesta al front si el usuario es nuevo
        const response = (0, _10_validarResponse_1.default)(afiliado, datos, asignacion, false);
        return response;
    }
    //Mandamos las respuesta al front si el usuario es antiguo
    const response = (0, _10_validarResponse_1.default)(afiliado, datos, antiguedad, true);
    return response;
});
exports.default = asignarCodigos;
