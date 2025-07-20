import { Router } from 'express';
import ImageController from '../controllers/ImageController';

const router = Router();

router.get('/', ImageController.getImagesByBreedId);

export default router;