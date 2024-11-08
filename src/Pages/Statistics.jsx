import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Statistics = () => {
  useEffect(() => {
    document.title = "Statistics | GADGET HEAVEN";
  }, []);
  return (
    <div>
      <div className="bg-customColor text-center pt-5">
        <h3 className="text-3xl font-bold  text-white">Statistics</h3>
        <p className="text-sm md:text-base text-center mt-4 text-white/90 mb-5 pb-8">
          Explore and purchase a wide range of quality laptops, phones, and
          accessories from our dashboard, tailored to <br /> meet your tech
          needs with ease and reliability.
        </p>
      </div>
      <div className="text-center">
        <p className="text-2xl font-semibold pt-3 pb-7">
          Oops! The Statistics you're looking for aren't here.😢
        </p>
        <Link
          to="/"
          className="py-2 px-5 font-bold text-white rounded-md bg-customColor"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default Statistics;
