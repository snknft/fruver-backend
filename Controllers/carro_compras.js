import mysql from 'mysql'
import { CarroCompras } from '../Models/carro_compras.js';

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    port: 3306,
    user: 'olopez',
    password: '12345',
    database: 'fruver'
});

const getCarroCompras = async (req, res) => {   
    await CarroCompras.findAll()
    .then(response => {
        res.status(200).json(response);
    }).catch((error) => {
        res.status(400).json({mensaje: error});
    });
};

const getCarroCompra = async (req, res) => {  
    const { id } = req.params; 
    await CarroCompras.findByPk(id)
    .then(response => {
        res.status(200).json(response);
    }).catch((error) => {
        res.status(400).json({mensaje: error});
    });
};

const findCarroCompra = async (req, res) => {  
    const { cliente_id, estado } = req.params; 
    await CarroCompras.findOne({where: {cliente_id: cliente_id, estado: estado}})
    .then(response => {
        res.status(200).json(response);
    }).catch((error) => {
        res.status(400).json({mensaje: error});
    });
};

const postCarroCompras = async (req, res) => {
    const { cliente_id, estado } = req.body;
    await CarroCompras.create({ cliente_id, estado})
    .then(response => {
        res.status(200).json(response);
    }).catch((error) => {
        res.status(400).json({mensaje: error});
    });
};

const putCarroCompras = async (req, res) => {
    const { id } = req.body;
    await CarroCompras.update(req.body, {where: {id: id}})
    .then(response => {
        res.status(200).json(response);
    }).catch((error) => {
        res.status(400).json({mensaje: error});
    });
};

const deleteCarroCompras = async (req, res) => {
    const { id } = req.params;

    await CarroCompras.findOne({
        where: {
            id : id
        }
    }).then(response => {
        if (response) {
            CarroCompras.destroy({
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
    getCarroCompras,
    getCarroCompra,
    findCarroCompra,
    postCarroCompras,
    putCarroCompras,
    deleteCarroCompras
};