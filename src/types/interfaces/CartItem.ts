import { Product } from './Product';

export interface CartItem {
  item: Product;
  quantity: number;
}