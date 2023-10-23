import { DataTypes } from "sequelize";
import database from "../connections/database";


const TipoDocumentoIdentidad = database.define("tipo_documento_identidad", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  codigo: {
    type: DataTypes.STRING(4),
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING(50),
    allowNull: false,
  }
  },
  {
    timestamps: false,
    tableName: 'tipo_documento_identidad', 
  }
);


export default TipoDocumentoIdentidad;

