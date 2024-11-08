import React, { useEffect, useState } from "react";
import { useLoaderData, useLocation, useParams } from "react-router-dom";
import Product from "../Product/Product";
import ErrorPage from "../../Pages/ErrorPage";

const Products = () => {
  const data = useLoaderData();
  const { category } = useParams();
  const { pathname } = useLocation();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (category) {
      const filteredByCategory = [...data].filter(
        (product) => product.category === category
      );
      setProducts(filteredByCategory);
    } else {
      setProducts(data);
    }
  }, [data, category]);

  return (
    <div>
      {products.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 w-full border">
          {products.map((product) => (
            <Product key={product.productId} product={product}></Product>
          ))}
        </div>
      ) : (
        <ErrorPage
          pathname={pathname}
          errorTitle="4😢4"
          subtitle="Sorry!😢 No Items Available in this category"
        ></ErrorPage>
      )}
    </div>
  );
};

export default Products;
