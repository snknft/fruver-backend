import { Router } from 'express';
import { getCarroComprasProductos, getCarroComprasProducto, findCompraDetalle, postCarroComprasProductos, putCarroComprasProductos, deleteCarroComprasProductos } from '../Controllers/carro_compras_productos.js';

export const carroComprasProductosRouter = Router();

carroComprasProductosRouter.get('/carroComprasProductos', getCarroComprasProductos);
carroComprasProductosRouter.get('/carroComprasProductos/:id', getCarroComprasProducto);
carroComprasProductosRouter.get('/carroComprasProductos/detalle/:carro_compras_id', findCompraDetalle);
carroComprasProductosRouter.post('/carroComprasProductos', postCarroComprasProductos);
carroComprasProductosRouter.put('/carroComprasProductos', putCarroComprasProductos);
carroComprasProductosRouter.delete('/carroComprasProductos/:id', deleteCarroComprasProductos);

export default carroComprasProductosRouter;