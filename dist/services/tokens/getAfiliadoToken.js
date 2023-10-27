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
Object.defineProperty(exports, "__esModule", { value: true });
const restService_1 = require("../webServices/restService");
function getAfiliadoToken(tipDoc, doc) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let token = process.env.API_TOKEN;
            const opciones = {
                method: 'GET',
                url: `${process.env.REST_ENDPOINT_USER_Cajamag}/${tipDoc}/${doc}`,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
            const response = yield (0, restService_1.restService)(opciones);
            if (response.code === 404) {
                return response.code;
            }
            return response.data;
        }
        catch (error) {
            console.error('Error al obtener usuarios:', error);
            return error;
        }
    });
}
exports.default = getAfiliadoToken;
