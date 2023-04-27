import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Layout/Layouts";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";
import Category from "../Pages/Category/Category";
import NewsLayouts from "../Pages/NewsLayouts/NewsLayouts";
import News from "../Components/News/News";

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
        path: "/about",
        element: <About />,
      },
      {
        path: "/career",
        element: <Career />,
      },
      {
        path: "category/:id",
        element: <Category />,
      },
    ],
  },
  {
    path: "news",
    element: <NewsLayouts />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ":id",
        element: <News />,
      },
      
    ],
  },
]);
