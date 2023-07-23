import mysql from 'mysql'
import { Producto } from '../Models/productos.js';

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    port: 3306,
    user: 'olopez',
    password: '12345',
    database: 'fruver'
});

const getProductos = async (req, res) => {   
    await Producto.findAll()
    .then(response => {
        res.status(200).json(response);
    }).catch((error) => {
        res.status(400).json({mensaje: error});
    });
};

const getProducto = async (req, res) => {  
    const { id } = req.params; 
    await Producto.findByPk(id)
    .then(response => {
        res.status(200).json(response);
    }).catch((error) => {
        res.status(400).json({mensaje: error});
    });
};

const postProductos = async (req, res) => {
    const { tipo, nombre, descripcion, imagen, valor_unitario, cantidad_stock } = req.body;
    await Producto.create({ tipo, nombre, descripcion, imagen, valor_unitario, cantidad_stock })
    .then(response => {
        res.status(200).json(response);
    }).catch((error) => {
        res.status(400).json({mensaje: error});
    });
};

const putProductos = async (req, res) => {
    const { id } = req.body;
    await Producto.update(req.body, {where: {id: id}})
    .then(response => {
        res.status(200).json(response);
    }).catch((error) => {
        res.status(400).json({mensaje: error});
    });
};

const deleteProductos = async (req, res) => {
    const { id } = req.params;

    await Producto.findOne({
        where: {
            id : id
        }
    }).then(response => {
        if (response) {
            Producto.destroy({
                where: {
                  id: id
                }
            }).then(() => { 
                res.status(200).json({mensaje: `Registro con id ${id} eliminado`});     
            }).catch((error) => {
                res.status(400).json({mensaje: error});
            });     
        }
        else{
            res.status(404).json({mensaje: `Registro con id ${id} no encontrado`});     
        }
    }).catch((error) => {
        res.status(400).json({mensaje: error});
    });
};

export {
    getProductos,
    getProducto,
    postProductos,
    putProductos,
    deleteProductos
};