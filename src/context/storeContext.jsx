import { createContext } from "react";
import { useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [category, setCategory] = useState("All");

  const contextValue = {
    category,
    setCategory,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
