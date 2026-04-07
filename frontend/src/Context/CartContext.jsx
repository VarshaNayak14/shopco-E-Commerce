import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {

  // ✅ Load from localStorage
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  // ✅ Save to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // ✅ ADD TO CART (FIXED UNIQUE ID LOGIC)
  const addToCart = (product) => {

    const existing = cartItems.find(item => item.id === product.id);

    if (existing) {
      // increase quantity
      setCartItems(
        cartItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // new product add
      setCartItems([
        ...cartItems,
        {
          ...product,
          id: product.id || Date.now(), // ✅ auto unique id
          quantity: 1
        }
      ]);
    }
  };

  // ❌ REMOVE ITEM
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // ➕ INCREASE
  const increaseQty = (id) => {
    setCartItems(
      cartItems.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // ➖ DECREASE
  const decreaseQty = (id) => {
    setCartItems(
      cartItems.map(item =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity > 1 ? item.quantity - 1 : 1
            }
          : item
      )
    );
  };

  // 🔢 TOTAL ITEMS
  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // 💰 TOTAL PRICE
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        cartCount,
        totalPrice
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;