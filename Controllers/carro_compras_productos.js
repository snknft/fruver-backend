import mysql from 'mysql'
import { CarroComprasProductos } from '../Models/carro_compras_productos.js';

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    port: 3306,
    user: 'olopez',
    password: '12345',
    database: 'fruver'
});

const getCarroComprasProductos = async (req, res) => {   
    await CarroComprasProductos.findAll()
    .then(response => {
        res.status(200).json(response);
    }).catch((error) => {
        res.status(400).json({mensaje: error});
    });
};

const getCarroComprasProducto = async (req, res) => {  
    const { id } = req.params; 
    await CarroComprasProductos.findByPk(id)
    .then(response => {
        res.status(200).json(response);
    }).catch((error) => {
        res.status(400).json({mensaje: error});
    });
};

const postCarroComprasProductos = async (req, res) => {
    const { carro_compras_id, producto_id, cantidad_producto } = req.body;
    await CarroComprasProductos.create({ carro_compras_id, producto_id, cantidad_producto})
    .then(response => {
        res.status(200).json(response);
    }).catch((error) => {
        res.status(400).json({mensaje: error});
    });
};

const putCarroComprasProductos = async (req, res) => {
    const { id } = req.body;
    await CarroComprasProductos.update(req.body, {where: {id: id}})
    .then(response => {
        res.status(200).json(response);
    }).catch((error) => {
        res.status(400).json({mensaje: error});
    });
};

const deleteCarroComprasProductos = async (req, res) => {
    const { id } = req.params;

    await CarroComprasProductos.findOne({
        where: {
            id : id
        }
    }).then(response => {
        if (response) {
            CarroComprasProductos.destroy({
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
    getCarroComprasProductos,
    getCarroComprasProducto,
    postCarroComprasProductos,
    putCarroComprasProductos,
    deleteCarroComprasProductos
};