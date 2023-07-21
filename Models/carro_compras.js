import { DataTypes } from "sequelize";
import { sequelize } from "../Database/database.js";

const CarroCompras = sequelize.define(
  "carro_compras",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    cliente_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    estado: {
      type: DataTypes.ENUM,
      allowNull: false,
      values: ['P', 'F'],
    }
  },
  {
    timestamps: false,
  }
);

/*
CarroCompras.belongsTo(User, {
  foreignKey: "carro_compras_ibfk_1",
  targetKey: "cliente_id",
  constraints: false,
});
*/

// `sequelize.define` also returns the model
//console.log(Producto === sequelize.models.Producto); // true

export { CarroCompras };
