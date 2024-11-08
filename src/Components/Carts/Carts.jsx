import { useContext } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { CartContext, PriceContext } from "../../utils/CartProvider";

const Carts = ({ cartItem }) => {
  const { handleRemove } = useContext(CartContext);
  const { handleReducePrice } = useContext(PriceContext);
  const { productId, name, image, price, description } = cartItem;

  return (
    <div className="flex items-center gap-4 md:gap-8 border p-5 mb-4 w-11/12 md:w-7/12 mx-auto rounded-xl">
      <div className=" md:h-28 w-44">
        <img className="w-full h-full " src={image} alt="image" />
      </div>
      <div className="flex-grow">
        <h2 className="text-xl md:text-2xl font-bold">{name}</h2>
        <p className="text-xs md:text-base text-gray-500 py-3">{description}</p>
        <p className=" md:text-lg font-semibold">Price: ${price}</p>
      </div>
      <FaTrashAlt
        onClick={() => {
          handleRemove(productId);
          handleReducePrice(price);
        }}
        className="text-3xl text-red-600 cursor-pointer"
      />
    </div>
  );
};

export default Carts;
