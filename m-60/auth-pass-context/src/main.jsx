import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Layouts from "./Components/Layout/Layouts";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Courses from "./Components/Courses/Courses";
import Blogs from "./Components/Blogs/Blogs";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import AuthProviders from "./providers/authproviders";
import PrivateRoute from "./route/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <PrivateRoute><About /> </PrivateRoute>,
      },
      {
        path: "courses",
        element: <PrivateRoute><Courses /></PrivateRoute>,
      },
      {
        path: "blogs",
        element: <PrivateRoute><Blogs /></PrivateRoute>,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
    <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>
);
