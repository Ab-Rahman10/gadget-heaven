import React, { useContext, useEffect, useState } from "react";
import {
  CartContext,
  CountContext,
  FavoriteContext,
  PriceContext,
} from "../utils/CartProvider";
import Carts from "../Components/Carts/Carts";
import { BiSort } from "react-icons/bi";
import Wishlist from "../Components/WishList/Wishlist";
import Sort from "../Components/Sort/Sort";
import PaymentImg from "../assets/Group.png";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard | GADGET HEAVEN";
  }, []);
  const { cartItems, clearCartList } = useContext(CartContext);
  const { favoriteItems } = useContext(FavoriteContext);
  const { price, setPrice } = useContext(PriceContext);
  const { setCount } = useContext(CountContext);

  const [display, setDisplay] = useState("cart");
  const [sort, setSort] = useState(null);
  const navigate = useNavigate();

  // Showing display
  const handleDisplay = (selectedView) => {
    setDisplay(selectedView);
  };

  const handleSorted = (sortByPrice) => {
    const sorted = [...cartItems].sort((a, b) => b.price - a.price);
    setSort(sorted);
    setDisplay(sortByPrice);
  };

  // Show modal
  const showModal = () => {
    document.getElementById("my_modal_1").showModal();
  };

  // Close modal
  const handleClose = (closeCartItems) => {
    if (cartItems.length > 0) {
      setDisplay(closeCartItems);
      setPrice(0);
      setCount(0);
      clearCartList();
      toast.success("Purchase completed successfully!");
    } else {
      toast.error("You haven't selected any products in the Cart.");
    }
  };

  // remove single item from sort
  const handleRemoveFromSort = (id) => {
    const remaining = [...sort].filter((product) => product.productId !== id);
    setSort(remaining);
    toast.success("Removed Successfully!");
  };

  return (
    <div>
      <div className="bg-customColor text-center pt-5 pb-[20px] md:pb-[40px] mb-4 md:mb-12">
        <h3 className="text-3xl font-bold  text-white">Dashboard</h3>
        <p className="text-sm md:text-base text-center mt-4 text-white/90 mb-5">
          Explore and purchase a wide range of quality laptops, phones, and
          accessories from our dashboard, tailored to <br /> meet your tech
          needs with ease and reliability.
        </p>
        <button
          onClick={() => handleDisplay("cart")}
          className={
            display === "cart"
              ? "text-base font-semibold mr-2 md:mr-5 py-1.5 md:py-2 px-3 md:px-7 bg-white rounded-full text-customColor"
              : "text-base font-semibold mr-2 md:mr-5 py-1.5 md:py-2 px-3 md:px-7 bg-customColor rounded-full text-white border border-white"
          }
        >
          Cart
        </button>
        <button
          onClick={() => handleDisplay("wishList")}
          className={
            display === "wishList"
              ? "text-base font-semibold mr-2 md:mr-5 py-1.5 md:py-2 px-3 md:px-7 bg-white rounded-full text-customColor"
              : "text-base font-semibold mr-2 md:mr-5 py-1.5 md:py-2 px-3 md:px-7 bg-customColor rounded-full text-white border border-white"
          }
        >
          Wish List
        </button>
      </div>
      <div className="flex justify-between items-center w-8/12 mx-auto">
        <p className="font-bold text-lg md:text-2xl">
          {display === "cart"
            ? "Cart"
            : display === "sort"
            ? "Sorted List"
            : "Wish List"}
        </p>
        {display === "wishList" ? null : (
          <div className="flex flex-col md:flex-row gap-4">
            <h5 className="text-lg md:text-2xl font-bold">
              Total cost: ${price}
            </h5>
            <button
              onClick={() => handleSorted("sort")}
              className="py-1 md:py-1.5 px-5 md:px-5 rounded-full border border-customColor text-customColor font-semibold hover:bg-customColor hover:text-white"
            >
              Sort by Price
              <span className="inline-flex pl-2">
                <BiSort />
              </span>
            </button>
            <button
              onClick={showModal}
              className="py-1 md:py-1.5 px-3 md:px-5 rounded-full bg-customColor text-white"
            >
              Purchase
            </button>
          </div>
        )}
      </div>
      {display === "cart" ? (
        <div className="mt-4 md:mt-8">
          {cartItems.map((cartItem) => (
            <Carts key={cartItem.productId} cartItem={cartItem}></Carts>
          ))}
        </div>
      ) : display === "wishList" ? (
        <div className="mt-4 md:mt-8">
          {favoriteItems.map((favoriteItem) => (
            <Wishlist
              key={favoriteItem.productId}
              favoriteItem={favoriteItem}
            ></Wishlist>
          ))}
        </div>
      ) : display === "sort" ? (
        <div className="mt-4 md:mt-8">
          {sort.map((sort) => (
            <Sort
              key={sort.productId}
              sort={sort}
              handleRemoveFromSort={handleRemoveFromSort}
            ></Sort>
          ))}
        </div>
      ) : null}

      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box flex flex-col items-center">
          <div className="">
            <img src={PaymentImg} alt="image" />
          </div>
          <h3 className="font-bold text-lg mt-3">Payment Successfully!</h3>
          <hr className="w-full border border-b-gray-100 mt-2" />
          <p className="py-4">Thanks for Purchasing.</p>
          <p className="py-4">Total Price: ${price}</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
                onClick={() => {
                  handleClose("close");
                  navigate("/");
                }}
                className="btn"
              >
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Dashboard;
