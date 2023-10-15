import { Brand } from './Brand';

export interface CreditCard {
  fullName: string;
  cardNumber: string;
  expireDate: string;
  cvv: string;
  brand: Brand;
}
