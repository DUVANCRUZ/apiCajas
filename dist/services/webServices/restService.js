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
exports.restService = void 0;
const axios_1 = __importDefault(require("axios"));
const restService = (config) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield axios_1.default
            .request(config)
            .then((response) => {
            return response.data;
        })
            .catch((error) => {
            if (error.response.status === 404 ||
                error.response.status === 401 ||
                error.response.status === 400) {
                return error.response.data;
            }
            throw error.message;
        });
    }
    catch (error) {
        console.log(error);
        return error;
    }
});
exports.restService = restService;
