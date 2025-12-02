import { Marca } from '../marcas/marca';

export interface Refrigerador {
  id: number | null;
  modelo: string;
  color: string; 
  precio: number;
  marca: Marca; 
  imagenUrl?: string;
}