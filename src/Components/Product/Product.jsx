import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { productId, name, image, price } = product;

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <hr />
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Price: ${price}</p>
        <div className="card-actions justify-start">
          <Link
            to={`/product/${productId}`}
            className="mt-4 py-2 px-5 border border-customColor rounded-full text-customColor hover:bg-customColor hover:text-white font-bold"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
