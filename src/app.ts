import express from 'express';
import routes from './routes';
import dotenv from 'dotenv';
import cors from 'cors';

import { connectDB } from './config/db';
import usuarioRoutes from './routes/usuario.routes';

dotenv.config();

const app = express();
//const PORT = process.env.PORT || 4000;

app.use(cors({
  origin: 'http://localhost:4200',
  credentials: true
}));

app.use(express.json());
app.use('/api', routes);

app.use('/api/usuarios', usuarioRoutes);
app.get('/', (_req, res) => res.send('API funcionando'));

/*connectDB().then(() => {
  app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
});*/

export default app;