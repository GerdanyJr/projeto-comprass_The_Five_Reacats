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
  updateUser: (user: User) => {},
  addCartItem: (item: Product) => {},
  addShippingAddress: (item: ShippingAddress) => {},
  addCreditCard: (item: CreditCard) => {},
  removeCartItem: (itemId: number) => {},
  setItemQuantity: (itemId: number, itemQuantity: number) => {},
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
  function updateUser(newUser: User) {
    setUser(prevState => { return {...prevState, ...newUser}; });
    AsyncStorage.setItem('user', JSON.stringify(user));
  }
  function addCartItem(item: Product) {
    setCart((prevState) => [...prevState, { item: item, quantity: 0 }]);
  }
  function removeCartItem(itemId: number) {
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
  function setItemQuantity(itemId: number, itemQuantity: number) {
    setCart((prevState) =>
      prevState.map((cartItem) =>
        cartItem.item.id === itemId
          ? { ...cartItem, quantity: itemQuantity }
          : cartItem
      )
    );
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
        updateUser: updateUser,
        addCartItem: addCartItem,
        addShippingAddress: addShippingAddress,
        addCreditCard: addCreditCard,
        setItemQuantity: setItemQuantity,
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
