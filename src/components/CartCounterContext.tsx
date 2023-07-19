"use client"
import { createContext, useContext, Dispatch, SetStateAction, useState } from 'react';
import { Product } from '@/types/TableModels';

interface ContextProps {
  cartCount: number,
  setCartCount: Dispatch<SetStateAction<number>>
}


const CartCounterContext = createContext<ContextProps>({
  cartCount: 0,
  setCartCount: () => { },
});

export const GlobalCartCounterContextProvider = ({ children }) => {
  const data = localStorage.getItem('cart');
  if (data !== null) {
    const cart: Product[] = JSON.parse(data);
    const numofitems = cart.reduce((total, product) => product.quantity ? total + parseInt(product.quantity) : total + 0, 0);
    const [cartCount, setCartCount] = useState<number>(numofitems);
    return (
      <CartCounterContext.Provider value={{ cartCount, setCartCount }}>
        {children}
      </CartCounterContext.Provider>
    )
  }
  else {
    const [cartCount, setCartCount] = useState<number>(0);
    return (
      <CartCounterContext.Provider value={{ cartCount, setCartCount }}>
        {children}
      </CartCounterContext.Provider>
    )
  }

}


export const useGlobalContext = () => useContext(CartCounterContext);