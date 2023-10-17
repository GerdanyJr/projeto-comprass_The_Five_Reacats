import React, { createContext, useState } from 'react';
import { ShippingAddress } from '../types/interfaces/ShippingAddress';
import { CreditCard } from '../types/interfaces/CreditCard';
import { Brand } from '../types/interfaces/Brand';

type PaymentMethod = 'pix' | 'boleto' | 'creditCard' | null;

export const CheckoutContext = createContext({
  creditCard: {} as CreditCard | null,
  addCreditCard: (creditCard: CreditCard) => {},
  shippingAddress: null as ShippingAddress | null,
  addShippingAddress: (shippingAddress: ShippingAddress) => {},
  paymentMethod: null as PaymentMethod,
  addPaymentMethod: (paymentMethod: PaymentMethod) => {},
  deliveryMethod: null as Brand | null,
  addDeliveryMethod: (deliveryMethod: Brand) => {},
});

export function CheckoutContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [shippingAddress, setShippingAddress] =
    useState<ShippingAddress | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(null);
  const [creditCard, setCreditCard] = useState<CreditCard | null>(null);
  const [deliveryMethod, setDeliveryMethod] = useState<Brand | null>(null);

  function addShippingAddress(shippingAddress: ShippingAddress) {
    setShippingAddress(shippingAddress);
  }

  function addPaymentMethod(paymentMethod: PaymentMethod) {
    setPaymentMethod(paymentMethod);
  }

  function addDeliveryMethod(deliveryMethod: Brand) {
    setDeliveryMethod(deliveryMethod);
  }

  function addCreditCard(creditCard: CreditCard) {
    setCreditCard(creditCard);
  }
  return (
    <CheckoutContext.Provider
      value={{
        creditCard: creditCard,
        addCreditCard: addCreditCard,
        shippingAddress: shippingAddress,
        addShippingAddress: addShippingAddress,
        paymentMethod: paymentMethod,
        addPaymentMethod: addPaymentMethod,
        deliveryMethod: deliveryMethod,
        addDeliveryMethod: addDeliveryMethod,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}