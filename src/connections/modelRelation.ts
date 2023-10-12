import database from "./database";
import Cajas from "../models/Cajas"; 
import Sedes from "../models/Sedes"; 

// Define las relaciones entre los modelos
Cajas.hasMany(Sedes, { foreignKey: "cajaId" });
Sedes.belongsTo(Cajas, { foreignKey: "cajaId" });

// Sincroniza los modelos con la base de datos
export function modelRelation() {
    // Sincroniza los modelos con la base de datos
    database.sync({ alter: true })
      .then(() => {
        console.log("Database synchronized successfully");
      })
      .catch((error) => {
        console.error("Error synchronizing the database:", error);
      });
  }