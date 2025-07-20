import { Router } from 'express';
import breedRoutes from './breeds';
import imageRoutes from './images';

const router = Router();

router.use('/breeds', breedRoutes);
router.use('/imagesbybreedid', imageRoutes);

export default router;