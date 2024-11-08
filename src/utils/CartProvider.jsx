import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();
export const FavoriteContext = createContext();
export const CountContext = createContext();
export const CountFavoriteContext = createContext();
export const PriceContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [count, setCount] = useState([]);
  const [countFavorite, setCountFavorite] = useState([]);
  const [price, setPrice] = useState(0);

  // Remove single item from cart
  const handleRemove = (id) => {
    const remaining = [...cartItems].filter(
      (product) => product.productId !== id
    );
    setCartItems(remaining);
    toast.success("Removed Successfully!");
  };

  // Remove single item from wish list
  const handleRemoveFromWishList = (id) => {
    const remaining = [...favoriteItems].filter(
      (product) => product.productId !== id
    );
    setFavoriteItems(remaining);
    toast.success("Removed Successfully!");
  };

  // Clear cart list
  const clearCartList = () => {
    setCartItems([]);
  };

  // count price
  const handlePrice = (itemPrice) => {
    setPrice((prevPrice) => prevPrice + itemPrice);
  };

  // Reduce the price
  const handleReducePrice = (itemPrice) => {
    setPrice((prevPrice) => prevPrice - itemPrice);
  };

  // Add TO Cart
  const handleAddToCart = (product) => {
    // validation
    const existedItem = cartItems.find(
      (items) => items.productId === product.productId
    );

    if (existedItem) {
      toast.error("This item is already in your Cart.");
    } else {
      const addedToCart = [...cartItems, product];
      setCartItems(addedToCart);
      toast.success("Added to Cart successfully!");
      setCount(addedToCart);
    }
  };

  // Add To Wish List
  const handleFavorite = (product) => {
    // validation
    const existedItem = favoriteItems.find(
      (items) => items.productId === product.productId
    );

    if (existedItem) {
      toast.error("This item is already in your Wish List.");
    } else {
      const addedToFavorite = [...favoriteItems, product];
      setFavoriteItems(addedToFavorite);
      toast.success("Added to Wish List successfully!");
      setCountFavorite(addedToFavorite);
    }
  };
  return (
    <PriceContext.Provider
      value={{ price, setPrice, handlePrice, handleReducePrice }}
    >
      <CountFavoriteContext.Provider value={{ countFavorite }}>
        <CountContext.Provider value={{ count, setCount }}>
          <FavoriteContext.Provider
            value={{ favoriteItems, handleFavorite, handleRemoveFromWishList }}
          >
            <CartContext.Provider
              value={{
                cartItems,
                clearCartList,
                handleAddToCart,
                handleRemove,
              }}
            >
              {children}
            </CartContext.Provider>
          </FavoriteContext.Provider>
        </CountContext.Provider>
      </CountFavoriteContext.Provider>
    </PriceContext.Provider>
  );
};

export { CartProvider };
