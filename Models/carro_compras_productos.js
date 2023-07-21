import { DataTypes } from "sequelize";
import { sequelize } from "../Database/database.js";

const CarroComprasProductos = sequelize.define(
  "carro_compras_productos",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    carro_compras_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    producto_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cantidad_producto: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
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

export { CarroComprasProductos };
