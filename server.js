import express from 'express'

//Routes
import productoRouter from './Routes/producto-routes.js'
import usuarioRouter from './Routes/usuario-routes.js'
import carroComprasRouter from './Routes/carro-compras-routes.js'
import carroComprasProductosRouter from './Routes/carro-compras-productos-routes.js'
import facturaRouter from './Routes/factura-routes.js'

import { sequelize } from './Database/database.js';
import cors from 'cors';

//Crear instancia de express para configurar rutas, middleware
const app = express();

//origines cruzados
app.use(cors());

//para trabajar con solicitudes que utilicen datos tipo json
//siempre debe ir antes de configurar las rutas
app.use(express.json());

//Montar enrutador con middleware app.use
//middleware es una función que tiene acceso a request y response de la funcion
app.use(productoRouter);
app.use(usuarioRouter);
app.use(carroComprasRouter);
app.use(carroComprasProductosRouter);
app.use(facturaRouter);

//Establecer puerto
app.set('port', 3000);

//Test database
const testDb = async () => {
    try {
        await sequelize.authenticate();
        console.log(`Conexión a base de datos exitosa`);

        //colocar instancia en puerto
        app.listen(app.get('port'), () => {
            console.log(`Servidor escuchando por puerto ${app.get('port')}`);
        });
    } catch (error) {
        console.log(`Error al realizar conexión a base de datos: ${error}`);
    }
    
}

testDb();