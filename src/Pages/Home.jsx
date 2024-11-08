import React, { useEffect } from "react";
import Banner from "../Components/Banner/Banner";
import Category from "../Components/Categories/Category";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    document.title = "Home | GADGET HEAVEN";
  }, []);
  const categories = useLoaderData();

  return (
    <div>
      <Banner
        title="Upgrade Your Tech Accessorize with Gadget Heaven Accessories"
        subtitle="Explore the latest gadgets that will take your experience to the next
                    level. From smart devices to the coolest accessories, we have it
                    all!"
        btnText="Shop Now"
      ></Banner>

      <Category categories={categories}></Category>
      {/* OUTLET */}
    </div>
  );
};

export default Home;
