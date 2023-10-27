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
exports.getAfiliado = void 0;
const getAfiliadoToken_1 = __importDefault(require("../tokens/getAfiliadoToken"));
const renovarToken_1 = __importDefault(require("../tokens/renovarToken"));
const getAfiliado = (tipDoc, doc) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield (0, getAfiliadoToken_1.default)(tipDoc, doc);
    console.log(response);
    if (!response) {
        console.log('Token no válido. Renovando token...');
        const newToken = yield (0, renovarToken_1.default)();
        if (newToken) {
            try {
                const newResponse = yield (0, getAfiliadoToken_1.default)(tipDoc, doc);
                return newResponse;
            }
            catch (newError) {
                return newError;
            }
        }
        else {
            return 'No se pudo obtener un nuevo token válido.';
        }
    }
    return response;
});
exports.getAfiliado = getAfiliado;
exports.default = exports.getAfiliado;
