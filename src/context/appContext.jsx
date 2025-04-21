import { createContext, useRef, useState } from "react";

export const AppContext = createContext();
export const AppContextProvider = ({ children }) => {
  //   const [cart, setCart] = useState(false);
  const cart = useRef(false);
  const [cartItem, setCartItem] = useState([]);
  return (
    <AppContext.Provider value={{ cart, cartItem, setCartItem }}>
      {children}
    </AppContext.Provider>
  );
};
