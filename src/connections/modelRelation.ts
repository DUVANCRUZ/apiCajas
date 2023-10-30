import db from "./database";
import Afiliado from "../models/Afiliado";
import AfiliadoBeneficiario from "../models/AfiliadoBeneficiario";
import Convenio from "../models/Convenio";
import Planes from "../models/Planes";
import Sede from "../models/Sede";
import UserRoles from "../models/UserRoles";
import Users from "../models/Users";
import TipoDocumentoIdentidad from "../models/TipoDocumentoIdentidad";

Afiliado.belongsTo(TipoDocumentoIdentidad, {
  foreignKey: "tipo_documento",
  constraints: true,
  foreignKeyConstraint: true,
});

AfiliadoBeneficiario.belongsTo(Afiliado, {
  foreignKey: "id_afiliado_beneficiario",
  as: "Afiliado",
  constraints: true,
  foreignKeyConstraint: true,
});

AfiliadoBeneficiario.belongsTo(Afiliado, {
  foreignKey: "id_afiliado_cotizante",
  as: "AfiliadoCotizante",
  constraints: true,
  foreignKeyConstraint: true,
});

Convenio.belongsTo(Planes, {
  foreignKey: "id_plan",
  constraints: true,
  foreignKeyConstraint: true,
});

Convenio.belongsTo(Afiliado, {
  foreignKey: "id_afiliado",
  constraints: true,
  foreignKeyConstraint: true,
});

Convenio.belongsTo(Sede, {
  foreignKey: "id_sede",
  constraints: true,
  foreignKeyConstraint: true,
});

Users.belongsTo(UserRoles, {
  foreignKey: "id_user_role",
  constraints: true,
  foreignKeyConstraint: true,
});

// Sincroniza los modelos con la base de datos
export async function modelRelation(): Promise<void> {
  try {
    await db.sync();
    console.log("Database synchronized successfully");
  } catch (error) {
    console.error("Error synchronizing the database:", error);
  }
}
