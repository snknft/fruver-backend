import { Router } from 'express';
import { getUsuarios, getUsuario, findUser, postUsuarios, putUsuarios, deleteUsuarios } from '../Controllers/usuarios.js';

export const usuarioRouter = Router();

usuarioRouter.get('/usuarios', getUsuarios);
usuarioRouter.get('/usuarios/:id', getUsuario);
usuarioRouter.get('/usuarios/:tipo/:cedula', findUser);
usuarioRouter.post('/usuarios', postUsuarios);
usuarioRouter.put('/usuarios', putUsuarios);
usuarioRouter.delete('/usuarios/:id', deleteUsuarios);

export default usuarioRouter;