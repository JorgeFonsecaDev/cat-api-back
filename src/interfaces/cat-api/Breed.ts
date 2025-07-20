export interface Breed {
  id: string;
  name: string;
  origin: string;
  description: string;
  temperament: string;
  [key: string]: any;
}