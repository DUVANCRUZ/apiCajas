"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const afiliado_controllers_1 = require("../controllers/afiliado.controllers");
const express_1 = __importDefault(require("express"));
const afiliadoRouter = (0, express_1.default)();
afiliadoRouter.get("/:tipDoc/:doc", afiliado_controllers_1.getAfiladoControllers);
afiliadoRouter.get("/asignarcodigo", afiliado_controllers_1.asignarCodigosController);
exports.default = afiliadoRouter;
