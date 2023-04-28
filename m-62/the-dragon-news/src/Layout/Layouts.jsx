import React, { createContext } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Navbar from "../Pages/shared/Navbar";
import Footer from "../Pages/shared/Footer";
import Menu from "../Pages/shared/Menu";
import CompoCategory from "../Components/CompoCategory/CompoCategory";
import RightSide from "../Components/RightSide/RightSide";

const Layouts = () => {
  return (
    <>
      <Navbar></Navbar>
      <Menu></Menu>
      {/* outlet part  */}
      <div className="grid grid-cols-7 w-11/12 mx-auto">
        <div className=" col-span-1">
          <CompoCategory></CompoCategory>
        </div>
        <div className=" lg:col-span-5 col-span-6">
          <Outlet></Outlet>
          {/* <NewsHome></NewsHome> */}
        </div>
        <div className="col-span-1 lg:visible invisible">
          <RightSide></RightSide>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default Layouts;
