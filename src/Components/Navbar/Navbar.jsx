import { useContext } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";
import { Link, NavLink, useLocation } from "react-router-dom";
import { CountContext, CountFavoriteContext } from "../../utils/CartProvider";

const Navbar = () => {
  const { pathname } = useLocation();
  const { count } = useContext(CountContext);
  const { countFavorite } = useContext(CountFavoriteContext);

  return (
    <div
      className={
        pathname === "/"
          ? "bg-customColor rounded-tr-3xl rounded-tl-3xl mx-2 md:mx-8 mt-2 md:mt-7"
          : " mx-2 md:mx-8 mt-2 md:mt-7"
      }
    >
      <div className="navbar md:w-10/12 md:mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <Link
              tabIndex={0}
              role="button"
              className={
                pathname === "/"
                  ? "btn btn-ghost lg:hidden text-white"
                  : "btn btn-ghost lg:hidden"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </Link>
            <div
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-gray-200 p-1 rounded-md text-black" : ""
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-gray-200 p-1 rounded-md text-black" : ""
                }
                to="/statistics"
              >
                Statistics
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-gray-200 p-1 rounded-md text-black" : ""
                }
                to="/contactUs"
              >
                Contact Us
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "bg-gray-200 p-1 rounded-md text-black" : ""
                }
                to="/dashboard"
              >
                Dashboard
              </NavLink>
            </div>
          </div>
          <Link
            className={
              pathname === "/"
                ? "btn btn-ghost text-xl font-bold text-white"
                : "btn btn-ghost text-xl font-bold"
            }
          >
            Gadget Heaven
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div
            className={
              pathname === "/"
                ? "space-x-12 font-semibold text-sm text-white"
                : "space-x-12 font-semibold text-sm"
            }
          >
            <NavLink
              className={({ isActive }) =>
                isActive ? "py-2 px-4 rounded-lg bg-black text-white" : ""
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "py-2 px-4 rounded-lg bg-black text-white" : ""
              }
              to="/statistics"
            >
              Statistics
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "py-2 px-4 rounded-lg bg-black text-white" : ""
              }
              to="/contactUs"
            >
              Contact Us
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "py-2 px-4 rounded-lg bg-black text-white" : ""
              }
              to="/dashboard"
            >
              Dashboard
            </NavLink>
          </div>
        </div>
        <div className="navbar-end gap-4 ">
          <div className="relative">
            <div
              className={
                pathname === "/"
                  ? "p-2 rounded-full bg-white"
                  : "p-2 rounded-full border"
              }
            >
              <FaCartArrowDown className="text-gray-700" size={20} />
            </div>
            <p className="text-xs text-yellow-400 absolute -top-1 -right-1">
              {count.length}
            </p>
          </div>
          <div className="relative">
            <div
              className={
                pathname === "/"
                  ? "p-2 rounded-full bg-white"
                  : "p-2 rounded-full border"
              }
            >
              <GrFavorite className="text-gray-700" size={20} />
            </div>
            <p className="text-xs text-yellow-400 absolute -top-1 -right-1">
              {countFavorite.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
