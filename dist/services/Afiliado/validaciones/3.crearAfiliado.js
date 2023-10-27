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
const crearAfiliado = (datos, datosWeb) => __awaiter(void 0, void 0, void 0, function* () {
    const { eMail, nDocumento, tipoDocumento } = datos;
    const { nombreUsuario, estadoAfiliacion, categoria, fechaNacimiento, generoAfiliado } = datosWeb;
    try {
        const afiliado = yield Afiliado_1.default.create({
            tipo_documento: tipoDocumento,
            numero_doc: nDocumento,
            nombre_completo: nombreUsuario,
            fecha_nacimiento: fechaNacimiento,
            email: eMail,
            genero: generoAfiliado,
            tarifa: categoria,
            estado_afiliado: estadoAfiliacion,
        });
        return afiliado.dataValues;
    }
    catch (error) {
        throw new Error("Error al buscar convenios");
    }
});
exports.default = crearAfiliado;