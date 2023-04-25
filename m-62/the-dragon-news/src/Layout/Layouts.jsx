import React, { createContext } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Navbar from "../Pages/shared/Navbar";
import Footer from "../Pages/shared/Footer";
import Menu from "../Pages/shared/Menu";
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
        <Menu
        ></Menu>
      </NavContext.Provider>
      {/* outlet part  */}
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Layouts;
