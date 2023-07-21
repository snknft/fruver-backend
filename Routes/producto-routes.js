import { Router } from 'express';
import { getProductos, getProducto, postProductos, putProductos, deleteProductos } from '../Controllers/productos.js';

export const productoRouter = Router();

productoRouter.get('/', (req, res) => {
    res.send('GET pagina principal Express');
});

productoRouter.get('/productos', getProductos);
productoRouter.get('/productos/:id', getProducto);
productoRouter.post('/productos', postProductos);
productoRouter.put('/productos', putProductos);
productoRouter.delete('/productos/:id', deleteProductos);

export default productoRouter;