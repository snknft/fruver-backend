import mysql from 'mysql'
import { Usuario } from '../Models/usuarios.js';

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    port: 3306,
    user: 'olopez',
    password: '12345',
    database: 'fruver'
});

const getUsuarios = async (req, res) => {   
    await Usuario.findAll()
    .then(response => {
        res.status(200).json(response);
    }).catch((error) => {
        res.status(400).json({mensaje: error});
    });
};

const getUsuario = async (req, res) => {  
    const { id } = req.params; 
    await Usuario.findByPk(id)
    .then(response => {
        res.status(200).json(response);
    }).catch((error) => {
        res.status(400).json({mensaje: error});
    });
};

const postUsuarios = async (req, res) => {
    const { cedula, tipo } = req.body;
    await Usuario.create({ cedula, tipo })
    .then(response => {
        res.status(200).json(response);
    }).catch((error) => {
        res.status(400).json({mensaje: error});
    });
};

const putUsuarios = async (req, res) => {
    const { id } = req.body;
    await Usuario.update(req.body, {where: {id: id}})
    .then(response => {
        res.status(200).json(response);
    }).catch((error) => {
        res.status(400).json({mensaje: error});
    });
};

const deleteUsuarios = async (req, res) => {
    const { id } = req.params;

    await Usuario.findOne({
        where: {
            id : id
        }
    }).then(response => {
        if (response) {
            Usuario.destroy({
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
    getUsuarios,
    getUsuario,
    postUsuarios,
    putUsuarios,
    deleteUsuarios
};