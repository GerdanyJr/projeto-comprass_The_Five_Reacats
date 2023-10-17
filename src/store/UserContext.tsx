import React, { createContext, useState } from 'react';
import { User } from '../types/interfaces/User';
import { Token } from '../types/interfaces/Token';
import { CartItem } from '../types/interfaces/CartItem';
import { Product } from '../types/interfaces/Product';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ShippingAddress } from '../types/interfaces/ShippingAddress';
import { CreditCard } from '../types/interfaces/CreditCard';

export const UserContext = createContext({
  user: {} as User | null,
  token: {} as Token | null,
  isAuthenticated: false,
  cart: [] as CartItem[],
  authenticate: (token: Token, user: User) => {},
  addShippingAddress: (item: ShippingAddress) => {},
  addCreditCard: (item: CreditCard) => {},
  removeCartItem: (itemId: string) => {},
  setItem: (product: Product, itemQuantity: number) => {},
  getQuantity: (id:string):number => {return 25},
  clearCart: () => {},
  logout: () => {},
  lang: 'en',
  changeLang: (newLang: string) => {},
});

export function UserContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [token, setToken] = useState<Token | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [lang, setLang] = useState('en');
  function authenticate(token: Token, user: User) {
    setToken(token);
    setUser(user);
    AsyncStorage.setItem('token', JSON.stringify(token));
    AsyncStorage.setItem('user', JSON.stringify(user));
  }
  function logout() {
    setToken(null);
    setUser(null);
    AsyncStorage.multiRemove(['token', 'user']);
  }
  function removeCartItem(itemId: string) {
    setCart((prevState) => prevState.filter(({ item }) => item.id !== itemId));
  }
  function addShippingAddress(shippingAddress: ShippingAddress) {
    const newShippings = [...user!.shippingAdresses, shippingAddress];
    if (user !== null) {
      setUser((prevState) => {
        return {
          ...prevState!,
          shippingAdresses: newShippings,
        };
      });
    }
  }
  function addCreditCard(card: CreditCard) {
    if (!user?.paymentForms.includes(card)) {
      const newPaymentForms = [...user!.paymentForms, card];
      if (user !== null) {
        setUser((prevState) => {
          return { ...prevState!, paymentForms: newPaymentForms };
        });
      }
    }
  }
  function setItem(product: Product, itemQuantity: number) {
    const foundCart = cart.find((item) => item.item.id === product.id);
    let newCart: CartItem[] = [];

    if (foundCart) {
      newCart = cart.map((cartItem) =>
        cartItem.item.id === product.id
          ? { ...cartItem, quantity: itemQuantity }
          : cartItem
      );
    } else {
      newCart = [...cart, { item: product, quantity: itemQuantity }];
    }
    setCart(newCart);
    AsyncStorage.setItem('Cart', JSON.stringify(cart));
  }

   function getQuantity(id: string):number{
    var quantity = 0
    cart.map((cartItem) => {
      if(cartItem.item.id === id){
        quantity = quantity + cartItem.quantity
      }
    })

    return quantity
  }

  function clearCart() {
    setCart([]);
  }

  function changeLang(newLang: string) {
    setLang(newLang);
    AsyncStorage.setItem('lang', newLang);
  }

  return (
    <UserContext.Provider
      value={{
        user: user,
        token: token,
        isAuthenticated: !!token,
        cart: cart,
        addShippingAddress: addShippingAddress,
        addCreditCard: addCreditCard,
        setItem: setItem,
        getQuantity: getQuantity,
        removeCartItem: removeCartItem,
        clearCart: clearCart,
        authenticate: authenticate,
        logout: logout,
        lang: lang,
        changeLang: changeLang,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
