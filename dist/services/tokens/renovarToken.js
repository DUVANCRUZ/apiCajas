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
const fs_1 = __importDefault(require("fs"));
const dotenv_1 = __importDefault(require("dotenv"));
const form_data_1 = __importDefault(require("form-data"));
const restService_1 = require("../webServices/restService");
const renovarToken = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let token = '';
        const data = new form_data_1.default();
        data.append('email', `${process.env.REST_USERNAME_Cajamag}`);
        data.append('password', `${process.env.REST_PASSWORD_Cajamag}`);
        data.append('grant_type', 'password');
        const opcionesTokenCajamag = {
            method: 'POST',
            url: `${process.env.REST_ENDPOINT_TOKEN_Cajamag}`,
            headers: Object.assign({ Authorization: `Bearer ${token}`, 'Content-Type': 'application/from-data' }, data.getHeaders()),
            data: data,
        };
        try {
            const WStoken = yield (0, restService_1.restService)(opcionesTokenCajamag);
            console.log(WStoken);
            if (WStoken.error) {
                console.log(`Log Info ==> Error when authenticating webService => ${WStoken.error}`);
                return null;
            }
            token = WStoken.access_token;
        }
        catch (error) {
            console.error('Error al obtener un nuevo token de Cajamag:', error);
            return null;
        }
        //cambiar el API:TOKEN en el archivo .env
        if (token) {
            dotenv_1.default.config();
            process.env.API_TOKEN = token;
            // Leer el contenido actual del archivo .env
            const contenidoArchivoEnv = fs_1.default.readFileSync('.env', 'utf-8');
            // Dividir las líneas en un array
            const lineas = contenidoArchivoEnv.split('\n');
            // Buscar y reemplazar el valor de API_TOKEN
            const nuevoContenido = lineas
                .map((linea) => {
                if (linea.startsWith('API_TOKEN=')) {
                    return `API_TOKEN=${token}`;
                }
                return linea;
            })
                .join('\n');
            // Escribir el nuevo contenido de vuelta al archivo .env
            fs_1.default.writeFileSync('.env', nuevoContenido);
            return token;
        }
    }
    catch (error) {
        console.error('Error al configurar opciones de solicitud de token:', error);
        return null;
    }
});
exports.default = renovarToken;
