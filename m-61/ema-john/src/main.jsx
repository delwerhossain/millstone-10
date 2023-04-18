import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Shop from "./components/Shop/Shop";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Cart from "./components/Cart/Cart";
import Home from "./components/Home/Home";
import Order from "./components/Order/Order";
import Login from "./components/Login/Login";
import Inventory from "./components/Inventory/Inventory";
import cartProductLoader from "./loader/cartProductLoader";
import Checkout from "./components/Checkout/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Shop />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "order",
        element: <Order />,
        loader: cartProductLoader
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "inventory",
        element: <Inventory />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
