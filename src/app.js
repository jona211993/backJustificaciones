import express from 'express'
import config from './config.js'
import multer  from 'multer'
import cors from 'cors'

import usuarioRoutes from './routes/usuario.routes.js'
import matrizRoutes from './routes/matriz.routes.js'
import justificacionesRoutes from './routes/justificaciones.routes.js'

const app = express();

app.use(cors());
app.use(express.json());

// configuraciones
app.set('port', config.port) 

app.use(usuarioRoutes);
app.use(matrizRoutes);
app.use(justificacionesRoutes);


export default app;