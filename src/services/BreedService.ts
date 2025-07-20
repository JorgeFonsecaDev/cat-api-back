import api from '../config/api';
import { Breed } from '../interfaces/cat-api/Breed';

const BreedService = {
  async getAllBreeds(): Promise<Breed[]> {
    const { data } = await api.get('/breeds');
    return data;
  },

  async getBreedById(breedId: string): Promise<Breed | null> {
    const breeds = await BreedService.getAllBreeds();
    return breeds.find(b => b.id === breedId) || null;
  },

  async searchBreeds(query: string): Promise<Breed[]> {
    const { data } = await api.get(`/breeds/search?q=${query}`);
    return data;
  }
};

export default BreedService;