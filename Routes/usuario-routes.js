import { Router } from 'express';
import { getUsuarios, getUsuario, postUsuarios, putUsuarios, deleteUsuarios } from '../Controllers/usuarios.js';

export const usuarioRouter = Router();

usuarioRouter.get('/usuarios', getUsuarios);
usuarioRouter.get('/usuarios/:id', getUsuario);
usuarioRouter.post('/usuarios', postUsuarios);
usuarioRouter.put('/usuarios', putUsuarios);
usuarioRouter.delete('/usuarios/:id', deleteUsuarios);

export default usuarioRouter;