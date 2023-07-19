"use client"
import { createContext, useContext, Dispatch, SetStateAction, useState } from 'react';

interface ContextProps {
  cartCount: number,
  setCartCount: Dispatch<SetStateAction<number>>
}


const CartCounterContext = createContext<ContextProps>({
  cartCount: 0,
  setCartCount: () => { },
});

export const GlobalCartCounterContextProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState<number>(0);

  return (
    <CartCounterContext.Provider value={{ cartCount, setCartCount }}>
      {children}
    </CartCounterContext.Provider>
  )
}


export const useGlobalContext = () => useContext(CartCounterContext);