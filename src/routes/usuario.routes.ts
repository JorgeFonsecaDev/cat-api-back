import { Router } from 'express';
import { UsuarioController } from '../controllers/usuario.controller';

const router = Router();
const controller = new UsuarioController();

router.get('/login', controller.login);
router.get('/register', controller.register);

export default router;