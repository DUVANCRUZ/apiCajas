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
exports.modelRelation = void 0;
const database_1 = __importDefault(require("./database"));
const Afiliado_1 = __importDefault(require("../models/Afiliado"));
const AfiliadoBeneficiario_1 = __importDefault(require("../models/AfiliadoBeneficiario"));
const Convenio_1 = __importDefault(require("../models/Convenio"));
const Planes_1 = __importDefault(require("../models/Planes"));
const Sede_1 = __importDefault(require("../models/Sede"));
const UserRoles_1 = __importDefault(require("../models/UserRoles"));
const Users_1 = __importDefault(require("../models/Users"));
const TipoDocumentoIdentidad_1 = __importDefault(require("../models/TipoDocumentoIdentidad"));
Afiliado_1.default.belongsTo(TipoDocumentoIdentidad_1.default, {
    foreignKey: "tipo_documento",
    constraints: true,
    foreignKeyConstraint: true
});
AfiliadoBeneficiario_1.default.belongsTo(Afiliado_1.default, {
    foreignKey: 'id_afiliado_beneficiario',
    as: 'Afiliado',
    constraints: true,
    foreignKeyConstraint: true
});
AfiliadoBeneficiario_1.default.belongsTo(Afiliado_1.default, {
    foreignKey: 'id_afiliado_cotizante',
    as: 'AfiliadoCotizante',
    constraints: true,
    foreignKeyConstraint: true,
});
Convenio_1.default.belongsTo(Planes_1.default, {
    foreignKey: 'id_plan',
    constraints: true,
    foreignKeyConstraint: true
});
Convenio_1.default.belongsTo(Afiliado_1.default, {
    foreignKey: 'id_afiliado',
    constraints: true,
    foreignKeyConstraint: true
});
Convenio_1.default.belongsTo(Sede_1.default, {
    foreignKey: 'id_sede',
    constraints: true,
    foreignKeyConstraint: true
});
Users_1.default.belongsTo(UserRoles_1.default, {
    foreignKey: 'id_user_role',
    constraints: true,
    foreignKeyConstraint: true
});
// Sincroniza los modelos con la base de datos
function modelRelation() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield database_1.default.sync();
            console.log("Database synchronized successfully");
        }
        catch (error) {
            console.error("Error synchronizing the database:", error);
        }
    });
}
exports.modelRelation = modelRelation;
