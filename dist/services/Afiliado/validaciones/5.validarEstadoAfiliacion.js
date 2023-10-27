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
const _6_getInfoWebService_1 = __importDefault(require("./6.getInfoWebService"));
const validarEstadoAfiliacion = (datos) => __awaiter(void 0, void 0, void 0, function* () {
    const datosWebService = yield (0, _6_getInfoWebService_1.default)(datos);
    const { estadoAfiliacion } = datosWebService;
    if (!estadoAfiliacion) {
        throw new Error("El estado de afiliación es false");
    }
    return datosWebService;
});
exports.default = validarEstadoAfiliacion;
