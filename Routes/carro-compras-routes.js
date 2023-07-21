import { Router } from 'express';
import { getCarroCompras, getCarroCompra, postCarroCompras, putCarroCompras, deleteCarroCompras } from '../Controllers/carro_compras.js';

export const carroComprasRouter = Router();

carroComprasRouter.get('/carroCompras', getCarroCompras);
carroComprasRouter.get('/carroCompras/:id', getCarroCompra);
carroComprasRouter.post('/carroCompras', postCarroCompras);
carroComprasRouter.put('/carroCompras', putCarroCompras);
carroComprasRouter.delete('/carroCompras/:id', deleteCarroCompras);

export default carroComprasRouter;