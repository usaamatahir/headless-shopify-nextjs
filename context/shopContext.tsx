import { createContext, useState, useEffect, ReactNode, FC } from "react";
import { createCheckout, updateCheckout } from "../lib/shopifyData";
import { LineItem } from "../types/Query";

interface ShopProviderProps {
  children: ReactNode;
}
interface ContextTypeProps {
  cart: LineItem[];
  addToCart: (newItem: LineItem) => void;
  removeCartItem: (id: string) => void;
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  checkoutUrl: string;
}

const contextDefaultValues: ContextTypeProps = {
  cart: [],
  addToCart: () => {},
  removeCartItem: () => {},
  cartOpen: false,
  setCartOpen: () => {},
  checkoutUrl: "",
};

const CartContext = createContext(contextDefaultValues);

const ShopProvider: FC<ShopProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<LineItem[]>([]);
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const [checkoutId, setCheckoutId] = useState<string>("");
  const [checkoutUrl, setCheckoutUrl] = useState<string>("");

  useEffect(() => {
    if (localStorage.checkout_id) {
      const cartObject = JSON.parse(localStorage.checkout_id);

      if (cartObject[0].id) {
        setCart(cartObject[0]);
      } else if (cartObject[0].length > 0) {
        setCart([...cartObject[0]]);
      }
      setCheckoutId(cartObject[1].id);
      setCheckoutUrl(cartObject[1].webUrl);
    }
  }, []);

  async function addToCart(newItem: LineItem) {
    setCartOpen(true);
    if (cart.length === 0) {
      setCart([newItem]);

      const checkout = await createCheckout(
        newItem.id,
        newItem.variantQuantity
      );

      setCheckoutId(checkout.id);
      setCheckoutUrl(checkout.webUrl);
      localStorage.setItem(
        "checkout_id",
        JSON.stringify([[newItem], checkout])
      );
    } else {
      let newCart: LineItem[] = [];
      let added = false;

      cart.map((item) => {
        if (item.id === newItem.id) {
          item.variantQuantity++;
          newCart = [...cart];
          added = true;
        }
      });

      if (!added) {
        newCart = [...cart, newItem];
      }

      setCart(newCart);
      const newCheckout = await updateCheckout(checkoutId, newCart);
      localStorage.setItem(
        "checkout_id",
        JSON.stringify([newCart, newCheckout])
      );
    }
  }

  async function removeCartItem(itemToRemove: string) {
    const updatedCart = cart.filter((item) => item.id !== itemToRemove);

    setCart(updatedCart);

    const newCheckout = await updateCheckout(checkoutId, updatedCart);

    localStorage.setItem(
      "checkout_id",
      JSON.stringify([updatedCart, newCheckout])
    );

    if (cart.length === 1) {
      setCartOpen(false);
    }
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        cartOpen,
        setCartOpen,
        addToCart,
        checkoutUrl,
        removeCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const ShopConsumer = CartContext.Consumer;
export default ShopProvider;
export { ShopConsumer, CartContext };
