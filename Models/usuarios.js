import { DataTypes } from "sequelize";
import { sequelize } from "../Database/database.js";

const Usuario = sequelize.define(
  "usuarios",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    cedula: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tipo: {
      type: DataTypes.ENUM,
      allowNull: false,
      values: ['C', 'A', 'V'],
    }
  },
  {
    timestamps: false,
  }
);

// `sequelize.define` also returns the model
//console.log(Producto === sequelize.models.Producto); // true

export { Usuario };
