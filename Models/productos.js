import { DataTypes } from "sequelize";
import { sequelize } from "../Database/database.js";

const Producto = sequelize.define(
  "productos",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    tipo: {
      type: DataTypes.ENUM,
      allowNull: false,
      values: ["F", "V", "G"],
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    valor_unitario: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    cantidad_stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

// `sequelize.define` also returns the model
//console.log(Producto === sequelize.models.Producto); // true

export { Producto };
