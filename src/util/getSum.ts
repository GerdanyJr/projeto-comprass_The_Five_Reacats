import { CartItem } from '../types/interfaces/CartItem';

export function getCartPrice(cart: CartItem[]) {
  const price = cart
    .map(({ item, quantity }) => +item.price * quantity)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return price;
}
