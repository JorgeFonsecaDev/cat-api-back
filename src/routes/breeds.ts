import { Router } from 'express';
import BreedController from '../controllers/BreedController';

const router = Router();

router.get('/', BreedController.getAllBreeds);
router.get('/search', BreedController.searchBreeds);
router.get('/:breed_id', BreedController.getBreedById);

export default router;