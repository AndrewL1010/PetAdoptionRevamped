"use client"
import { createContext, useContext, Dispatch, SetStateAction, useState, ReactNode } from 'react';
import { Product } from '@/types/TableModels';

interface ContextProps {
  cartCount: number,
  setCartCount: Dispatch<SetStateAction<number>>
}


const CartCounterContext = createContext<ContextProps>({
  cartCount: 0,
  setCartCount: () => { },
});

export const GlobalCartCounterContextProvider = ({ children }: { children: ReactNode }) => {
  const data = localStorage.getItem('cart');
  let initialCount = 0;
  if (data !== null) {
    const cart: Product[] = JSON.parse(data);
    const numofitems = cart.reduce((total, product) => product.quantity ? total + parseInt(product.quantity) : total + 0, 0);
    initialCount = numofitems;
  }

  const [cartCount, setCartCount] = useState<number>(initialCount);

  return (
    <CartCounterContext.Provider value={{ cartCount, setCartCount }}>
      {children}
    </CartCounterContext.Provider>
  )
}


export const useGlobalContext = () => useContext(CartCounterContext);