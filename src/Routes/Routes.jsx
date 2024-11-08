import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import Products from "../Components/Products/Products";
import Statistics from "../Pages/Statistics";
import Dashboard from "../Pages/Dashboard";
import ProductDetails from "../Pages/ProductDetails";
import { CartProvider } from "../utils/CartProvider";
import ContactUs from "../Pages/ContactUs";

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <CartProvider>
        <MainLayout></MainLayout>
      </CartProvider>
    ),
    errorElement: (
      <ErrorPage
        errorTitle="4😢4"
        subtitle="Page Not Found"
        message="Oops! The Page you're looking for aren't here. They may have moved or never existed."
      ></ErrorPage>
    ),
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../categories.json"),
        children: [
          {
            path: "/",
            element: <Products></Products>,
            loader: () => fetch("../products.json"),
          },
          {
            path: "/category/:category",
            element: <Products></Products>,
            loader: () => fetch("../products.json"),
          },
        ],
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        loader: () => fetch("../products.json"),
      },
      {
        path: "/contactUs",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/product/:id",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch("../products.json"),
      },
    ],
  },
]);

export default routes;
