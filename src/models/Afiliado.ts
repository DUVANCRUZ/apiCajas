import { DataTypes } from "sequelize";
import database from "../connections/database";

const Afiliado = database.define("Afiliado", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  tipo_documento: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  numero_doc: {
    type: DataTypes.STRING(30),
    allowNull: false,
    unique: true,
  },
  nombre_completo: {
    type: DataTypes.STRING(80),
    allowNull: true,
  },
  fecha_nacimiento: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  genero: {
    type: DataTypes.STRING(11),
    allowNull: true,
  },
  tarifa: {
    type: DataTypes.STRING(1),
    allowNull: true,
  },
  estado_afiliado: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  descripcion_estado: {
    type: DataTypes.STRING(20),
    allowNull: true,
  }
  },
  {
    timestamps: false,
    tableName: 'Afiliado', 
  }
);



export default Afiliado;
