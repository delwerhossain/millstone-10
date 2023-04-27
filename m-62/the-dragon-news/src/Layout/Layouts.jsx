import React, { createContext } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Navbar from "../Pages/shared/Navbar";
import Footer from "../Pages/shared/Footer";
import Menu from "../Pages/shared/Menu";
import CompoCategory from "../Components/CompoCategory/CompoCategory";
import RightSide from "../Components/RightSide/RightSide";


let menuList = [
  { title: "Home", link: "/", id: 1 },
  { title: "About", link: "/about", id: 2 },
  { title: "Contact", link: "/career", id: 3 },
];
export const NavContext = createContext({
  menuList: [],
});

const Layouts = () => {
  return (
    <>
      <NavContext.Provider value={{ menuList }}>
        <Navbar></Navbar>
        <Menu></Menu>
      </NavContext.Provider>
      {/* outlet part  */}
      <div className="grid grid-cols-5 w-11/12 mx-auto">
        <div className=" col-span-1">
          <CompoCategory></CompoCategory>
        </div>
        <div className=" col-span-3">
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

export default Layouts;
