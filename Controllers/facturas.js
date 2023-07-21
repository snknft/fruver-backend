import mysql from 'mysql'
import { Factura } from '../Models/facturas.js';

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    port: 3306,
    user: 'olopez',
    password: '12345',
    database: 'fruver'
});

const getFacturas = async (req, res) => {   
    await Factura.findAll()
    .then(response => {
        res.status(200).json(response);
    }).catch((error) => {
        res.status(400).json({mensaje: error});
    });
};

const getFactura = async (req, res) => {  
    const { id } = req.params; 
    await Factura.findByPk(id)
    .then(response => {
        res.status(200).json(response);
    }).catch((error) => {
        res.status(400).json({mensaje: error});
    });
};

const postFacturas = async (req, res) => {
    const { carro_compras_id, monto_total } = req.body;
    await Factura.create({ carro_compras_id, monto_total })
    .then(response => {
        res.status(200).json(response);
    }).catch((error) => {
        res.status(400).json({mensaje: error});
    });
};

const putFacturas = async (req, res) => {
    const { id } = req.body;
    await Factura.update(req.body, {where: {id: id}})
    .then(response => {
        res.status(200).json(response);
    }).catch((error) => {
        res.status(400).json({mensaje: error});
    });
};

const deleteFacturas = async (req, res) => {
    const { id } = req.params;

    await Factura.findOne({
        where: {
            id : id
        }
    }).then(response => {
        if (response) {
            Factura.destroy({
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
    getFacturas,
    getFactura,
    postFacturas,
    putFacturas,
    deleteFacturas
};