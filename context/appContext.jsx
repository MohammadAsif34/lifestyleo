import { createContext, useRef, useState } from "react";

export const AppContext = createContext();
export const AppContextProvider = ({ children }) => {
  const [cart, setCart] = useState(true);
  // const cart = useRef(false);
  const [cartItem, setCartItem] = useState([]);
  return (
    <AppContext.Provider value={{ cart, setCart, cartItem, setCartItem }}>
      {children}
    </AppContext.Provider>
  );
};
