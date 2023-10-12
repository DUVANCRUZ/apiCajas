import { DataTypes } from "sequelize";
import db from "../connections/database";

const Sedes= db.define("Sedes",{
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

export default Sedes