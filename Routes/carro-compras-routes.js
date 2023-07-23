import { Router } from 'express';
import { getCarroCompras, getCarroCompra, findCarroCompra, postCarroCompras, putCarroCompras, deleteCarroCompras } from '../Controllers/carro_compras.js';

export const carroComprasRouter = Router();

carroComprasRouter.get('/carroCompras', getCarroCompras);
carroComprasRouter.get('/carroCompras/:id', getCarroCompra);
carroComprasRouter.get('/carroCompras/:cliente_id/:estado', findCarroCompra);
carroComprasRouter.post('/carroCompras', postCarroCompras);
carroComprasRouter.put('/carroCompras', putCarroCompras);
carroComprasRouter.delete('/carroCompras/:id', deleteCarroCompras);

export default carroComprasRouter;