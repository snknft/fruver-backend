import { Router } from 'express';
import { getFacturas, getFactura, postFacturas, putFacturas, deleteFacturas } from '../Controllers/facturas.js';

export const facturaoRouter = Router();

facturaoRouter.get('/facturas', getFacturas);
facturaoRouter.get('/facturas/:id', getFactura);
facturaoRouter.post('/facturas', postFacturas);
facturaoRouter.put('/facturas', putFacturas);
facturaoRouter.delete('/facturas/:id', deleteFacturas);

export default facturaoRouter;