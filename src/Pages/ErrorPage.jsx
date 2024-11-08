import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = ({ errorTitle, pathname, message, subtitle }) => {
  return (
    <div className="text-center">
      <h2
        className={
          pathname === "/category/Smart%20watches"
            ? "text-2xl text-red-500 mt-16 md:text-6xl font-bold"
            : "text-[100px] text-red-500 mt-16 font-bold  "
        }
      >
        {errorTitle}
      </h2>
      <p className="text-2xl font-semibold py-3">{subtitle}</p>
      <p className="text-lg font-semibold pt-3 pb-7">{message}</p>
      <Link
        to="/"
        className="py-2 px-5 font-bold text-white rounded-md bg-customColor"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
