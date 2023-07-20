"use client"
import { createContext, useContext, Dispatch, SetStateAction, useState, ReactNode } from 'react';
import { Product } from '@/types/TableModels';
import { useEffect } from 'react';

interface ContextProps {
  cartCount: number,
  setCartCount: Dispatch<SetStateAction<number>>
}

const CartCounterContext = createContext<ContextProps>({
  cartCount: 0,
  setCartCount: () => { },
});

export const GlobalCartCounterContextProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    const data = localStorage.getItem('cart');
    
    if (data !== null) {
      const cart: Product[] = JSON.parse(data);
      const numofitems = cart.reduce((total, product) => product.quantity ? total + parseInt(product.quantity) : total + 0, 0);
      setCartCount(numofitems);
    }

  }, []);

  const [cartCount, setCartCount] = useState<number>(0);

  return (
    <CartCounterContext.Provider value={{ cartCount, setCartCount }}>
      {children}
    </CartCounterContext.Provider>
  )
}


export const useGlobalContext = () => useContext(CartCounterContext);