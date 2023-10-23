import db from "./database";
import Afiliado from "../models/Afiliado";
import AfiliadoBeneficiario from "../models/AfiliadoBeneficiario";
import Convenio from "../models/Convenio";
import Planes from "../models/Planes";
import Sede from "../models/Sede";
import UserRoles from "../models/UserRoles";
import Users from "../models/Users";


AfiliadoBeneficiario.belongsTo(Afiliado, {
  foreignKey: 'id_afiliado_beneficiario',
  as: 'Afiliado',
  onDelete: 'CASCADE',
});

AfiliadoBeneficiario.belongsTo(Afiliado, {
  foreignKey: 'id_afiliado_cotizante',
  as: 'AfiliadoCotizante',
  onDelete: 'CASCADE',
});

Convenio.belongsTo(Planes, {
  foreignKey: 'id_plan',
  onDelete: 'CASCADE',
});

Convenio.belongsTo(Afiliado, {
  foreignKey: 'id_afiliado',
  onDelete: 'CASCADE',
});

Convenio.belongsTo(Sede, {
  foreignKey: 'id_sede',
  onDelete: 'CASCADE',
});

Users.belongsTo(UserRoles, {
  foreignKey: 'id_user_role',
  onDelete: 'CASCADE',
});


// Sincroniza los modelos con la base de datos
export async function modelRelation() {
  try {
    await db.sync();
    console.log("Database synchronized successfully");
  } catch (error) {
    console.error("Error synchronizing the database:", error);
  }
}