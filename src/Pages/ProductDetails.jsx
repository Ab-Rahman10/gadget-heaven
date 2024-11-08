import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { GrFavorite } from "react-icons/gr";
import { FaCartArrowDown } from "react-icons/fa";
import {
  CartContext,
  FavoriteContext,
  PriceContext,
} from "../utils/CartProvider";

const ProductDetails = () => {
  useEffect(() => {
    document.title = "Product Details | GADGET HEAVEN";
  }, []);
  const data = useLoaderData();
  const { id } = useParams();
  const [items, setItems] = useState({});
  const { handleAddToCart } = useContext(CartContext);
  const { handleFavorite } = useContext(FavoriteContext);
  const { handlePrice } = useContext(PriceContext);

  useEffect(() => {
    const singleProduct = data.find((product) => product.productId === id);
    setItems(singleProduct);
  }, [data, id]);

  //   Destructuring
  const {
    productId,
    name,
    image,
    category,
    price,
    description,
    specification,
    availability,
    rating,
  } = items;

  return (
    <div className="">
      <div className="bg-customColor text-center pt-5 pb-[120px] md:pb-[235px]    ">
        <h3 className="text-3xl font-bold  text-white">Product Details</h3>
        <p className="text-sm md:text-base text-center mt-4 text-white/90">
          Explore the features and specifications of this exceptional product,
          designed to meet your needs <br /> with quality, performance, and
          style.
        </p>
      </div>
      <div className="hero rounded-2xl border w-[400px] md:w-[880px] mx-auto bg-base-100 -mt-20 md:-mt-48">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={image}
            className="h-[200px] md:h-[380px] w-[210px] md:w-[390px] rounded-lg"
          />
          <div>
            <h1 className="text-2xl font-semibold">{name}</h1>
            <p className="pt-3">Price: ${price}</p>
            {availability ? (
              <p className="py-0.5 px-2 mt-3 rounded-full border border-green-400 inline-flex text-sm text-green-400">
                In Stock
              </p>
            ) : (
              <p className="py-0.5 px-2 mt-3 rounded-full border border-red-400 inline-flex text-sm text-red-400">
                Stock Out
              </p>
            )}

            <p className="pt-3 pb-3 text-gray-500">{description}</p>
            <div className="font-bold pb-2">Specification:</div>
            {specification &&
              specification.map((info, idx) => (
                <li key={idx} className="text-sm text-gray-500">
                  {info}
                </li>
              ))}
            <div className="font-bold mt-3 pb-2">Rating ⭐</div>
            <div className="flex gap-4 items-center">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star bg-yellow-400"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star bg-yellow-400"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star bg-yellow-400"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star bg-yellow-400"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
              </div>
              <p className="text-xs p-2 bg-gray-100 rounded-full">{rating}</p>
            </div>
            <br />
            <div className="flex items-center gap-4">
              <Link
                onClick={() => {
                  handleAddToCart(items);
                  handlePrice(price);
                }}
                className="mt-3 py-2 px-5 rounded-full text-white bg-customColor hover:border hover:border-customColor hover:bg-transparent hover:text-black "
              >
                Add to Cart
                <FaCartArrowDown
                  className="text-white inline-flex ml-2 hover:text-black"
                  size={20}
                />
              </Link>
              <div
                onClick={() => handleFavorite(items)}
                className="p-2 rounded-full border mt-3 hover:bg-customColor cursor-pointer"
              >
                <GrFavorite
                  className="text-gray-700 hover:text-white"
                  size={20}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
