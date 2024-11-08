import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Category = ({ categories }) => {
  return (
    <div className="w-11/12 mx-auto mt-[20px] md:mt-[90px]">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-6">
        Explore Cutting-Edge Gadgets
      </h2>
      <hr className="hidden md:block" />
      <div className="flex flex-col md:flex-row gap-5 mt-6 md:mt-12">
        <div className=" grid grid-cols-2 gap-3 md:flex md:flex-col md:gap-6 md:h-[490px] border p-2 md:p-6 rounded-xl">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "py-2 px-4 border rounded-full w-[175px] md:w-[190px] text-center bg-customColor text-white"
                : "py-2 px-4 border rounded-full w-[175px] md:w-[190px] text-center bg-gray-100"
            }
          >
            All Products
          </NavLink>
          {categories.map((category) => (
            <NavLink
              to={`/category/${category.category}`}
              className={({ isActive }) =>
                isActive
                  ? "py-2 px-4 border rounded-full w-[175px] md:w-[190px] text-center bg-customColor text-white"
                  : "py-2 px-4 border rounded-full w-[175px] md:w-[190px] text-center bg-gray-100"
              }
              key={category.id}
            >
              {category.category}
            </NavLink>
          ))}
        </div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Category;
