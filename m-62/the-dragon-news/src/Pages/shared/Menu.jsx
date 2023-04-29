import React from "react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";

let menuList = [
  { title: "Home", link: "/", id: 1 },
  { title: "About", link: "/about", id: 2 },
  { title: "Contact", link: "/career", id: 3 },
];
const Menu = () => {
  return (
    <div className="navbar bg-base-100 w-11/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuList.map((menu) => (
              <li key={menu.id}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active mr-5 mb-2" : "mr-5 mb-2"
                  }
                  to={menu.link}
                >
                  {menu.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {menuList.map((menu) => (
            <li className="text-xl font-semibold" key={menu.id}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? " mr-3 text-red-600  "
                    : "mr-3  text-black  hover:text-slate-600"
                }
                to={menu.link}
              >
                {menu.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <img
          className="rounded-full w-12 h-auto mx-4"
          src="https://i.pinimg.com/736x/a8/57/00/a85700f3c614f6313750b9d8196c08f5.jpg"
          alt=""
        />
        <Link to={'/login'} className="btn rounded-none px-6">Log in</Link>
      </div>
    </div>
  );
};

export default Menu;
