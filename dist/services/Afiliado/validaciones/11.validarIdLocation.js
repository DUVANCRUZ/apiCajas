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
const Sede_1 = __importDefault(require("../../../models/Sede"));
const validarIdLocation = (idSede) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const numberIdSede = parseInt(idSede);
        const sede = yield Sede_1.default.findByPk(numberIdSede);
        console.log(sede);
        if (!sede) {
            throw new Error("Sede no encontrada");
        }
        const id_sede = sede.dataValues.id_location;
        return id_sede;
    }
    catch (error) {
        console.error("Error al buscar el tipo de documento:", error);
        return "Error";
    }
});
exports.default = validarIdLocation;
