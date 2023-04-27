import React from "react";
import { NavContext } from "../../Layout/Layouts";
import Navbar from "../shared/Navbar";
import Menu from "../shared/Menu";
import CompoCategory from "../../Components/CompoCategory/CompoCategory";
import RightSide from "../../Components/RightSide/RightSide";
import Footer from "../shared/Footer";
import { Outlet } from "react-router-dom";

const NewsLayouts = () => {
  return (
    <>
      
        <Navbar></Navbar>
        <Menu></Menu>
      {/* outlet part  */}
      <div className="grid grid-cols-5 w-11/12 mx-auto">
        {/* <div className=" col-span-1">
          <CompoCategory></CompoCategory>
        </div> */}
        <div className=" col-span-4">
          <Outlet></Outlet>
          {/* <NewsHome></NewsHome> */}
        </div>
        <div className="col-span-1">
          <RightSide></RightSide>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default NewsLayouts;
