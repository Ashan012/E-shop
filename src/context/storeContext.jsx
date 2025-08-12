import { createContext } from "react";
import { useState } from "react";
import { productDetails } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState({});

  const addTocart = (item_id) => {
    if (cart[item_id] == null) {
      setCart({ ...cart, [item_id]: 1 });
    } else {
      setCart({ ...cart, [item_id]: (cart[item_id] += 1) });
    }
    console.log(cart);
  };
  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const item in cart) {
      if (cart[item] > 0) {
        let itemInfo = productDetails.find((product) => product._id == item);

        totalAmount += itemInfo.price * cart[item];
      }
    }
    return totalAmount;
  };

  const contextValue = {
    category,
    setCategory,
    addTocart,
    cart,
    getTotalAmount,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
