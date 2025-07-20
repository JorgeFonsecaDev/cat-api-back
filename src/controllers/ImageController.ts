import { Request, Response } from 'express';
  import ImageService from '../services/ImageService';

const ImageController = {
  async getImagesByBreedId(req: Request, res: Response) {
    const { breed_id } = req.query;
    if (!breed_id) return res.status(400).json({ message: 'breed_id is required' });

    const images = await ImageService.getImagesByBreedId(breed_id as string);
    res.json(images);
  }
};

export default ImageController;