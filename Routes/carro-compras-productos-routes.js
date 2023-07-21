import { Router } from 'express';
import { getCarroComprasProductos, getCarroComprasProducto, postCarroComprasProductos, putCarroComprasProductos, deleteCarroComprasProductos } from '../Controllers/carro_compras_productos.js';

export const carroComprasProductosRouter = Router();

carroComprasProductosRouter.get('/carroComprasProductos', getCarroComprasProductos);
carroComprasProductosRouter.get('/carroComprasProductos/:id', getCarroComprasProducto);
carroComprasProductosRouter.post('/carroComprasProductos', postCarroComprasProductos);
carroComprasProductosRouter.put('/carroComprasProductos', putCarroComprasProductos);
carroComprasProductosRouter.delete('/carroComprasProductos/:id', deleteCarroComprasProductos);

export default carroComprasProductosRouter;