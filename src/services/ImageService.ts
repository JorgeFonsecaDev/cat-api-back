import api from '../config/api';
import { CatImage } from '../interfaces/cat-api/Image';

const ImageService = {
  async getImagesByBreedId(breedId: string): Promise<CatImage[]> {
    const { data } = await api.get(`/images/search?breed_id=${breedId}`);
    return data;
  }
};

export default ImageService;