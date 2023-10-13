export interface User {
  id: number;
  avatar: string;
  email: string;
  name: string;
  shippingAdresses: Array<any>;
  paymentForms: Array<any>;
}