import { ShippingAddress } from "./ShippingAddress";

export interface User {
  id: number;
  avatar: string;
  email: string;
  name: string;
  shippingAdresses: Array<ShippingAddress>;
  paymentForms: Array<any>;
}