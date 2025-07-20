import { Request, Response } from 'express';
import BreedService from '../services/BreedService';


const BreedController = {
  async getAllBreeds(req: Request, res: Response) {
    const data = await BreedService.getAllBreeds();
    res.json(data);
  },

  async getBreedById(req: Request, res: Response) {
    const { breed_id } = req.params;
    const breed = await BreedService.getBreedById(breed_id);
    if (!breed) return res.status(404).json({ message: 'Breed not found' });
    res.json(breed);
  },

  async searchBreeds(req: Request, res: Response) {
    const { q } = req.query;
    const result = await BreedService.searchBreeds(q as string);
    res.json(result);
  }
};

export default BreedController;