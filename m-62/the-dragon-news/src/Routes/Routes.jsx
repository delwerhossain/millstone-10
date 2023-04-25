import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Components/Layout/Layouts";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Contact from "../Components/Contact/Contact";
import About from "../Components/About/About";
import Courses from "../Components/Courses/Courses";
import Blogs from "../Components/Blogs/Blogs";
import Home from "../Pages/Home";

export const router = createBrowserRouter([
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
        element: <About />,
      },
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
    ],
  },
]);
