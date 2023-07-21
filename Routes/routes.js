import { Router } from 'express';
import { getProductos, getProducto, postProductos, putProductos, deleteProductos } from '../Controllers/productos.js';

export const router = Router();

router.get('/', (req, res) => {
    res.send('GET pagina principal Express');
});

router.get('/productos', getProductos);
router.get('/productos/:id', getProducto);
router.post('/productos', postProductos);
router.put('/productos', putProductos);
router.delete('/productos/:id', deleteProductos);

export default router;