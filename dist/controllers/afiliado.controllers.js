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
exports.asignarCodigosController = exports.getAfiladoControllers = void 0;
const getAfiliado_1 = __importDefault(require("../services/Afiliado/getAfiliado"));
const asignarCodigos_1 = __importDefault(require("../services/Afiliado/asignarCodigos"));
const getAfiladoControllers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { tipDoc, doc } = req.params;
    try {
        const response = yield (0, getAfiliado_1.default)(tipDoc, doc);
        return res.status(200).json(response);
    }
    catch (error) {
        return res.status(400).send(error);
    }
});
exports.getAfiladoControllers = getAfiladoControllers;
const asignarCodigosController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const datos = req.body;
    try {
        const response = yield (0, asignarCodigos_1.default)(datos);
        return res.status(200).json(response);
    }
    catch (error) {
        return res.status(400).send(error.message);
    }
});
exports.asignarCodigosController = asignarCodigosController;
