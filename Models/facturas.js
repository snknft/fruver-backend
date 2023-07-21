import { DataTypes } from "sequelize";
import { sequelize } from "../Database/database.js";

const Factura = sequelize.define(
  "facturas",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    carro_compras_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    monto_total: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    }
  },
  {
    timestamps: false,
  }
);

export { Factura };
