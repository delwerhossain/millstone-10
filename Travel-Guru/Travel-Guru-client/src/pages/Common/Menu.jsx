import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from './../../assets/images/logo.png';

const Menu = () => {
  let menuList = [
    { title: "Home", link: "/", id: 1 },
    { title: "Blogs", link: "/blogs", id: 2 },
  ];
  return (
    <div className="navbar bg-transparent ">
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
                     `mr-5 mb-2 ${ isActive ? "active":''}`
                  }
                  to={menu.link}
                >
                  {menu.title}
                </NavLink>
              </li>
            ))}

            {/* <li tabIndex={0}>
                <Link to={"order"}>Order</Link>
              </li>
              <li>
                <Link to={"review"}>Review</Link>
              </li> */}
          </ul>
        </div>
              {/* <Link className="btn btn-ghost normal-case text-white   text-2xl font-bold">daisyUI</Link> */}
              <img src={logo} className="w-36 lg:mx-3 grayscale " alt="" />
        <div className="form-control">
          <input
            type="text"
            placeholder="Search your Destination..."
            className="input input-bordered"
          />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {menuList.map((menu) => (
            <li key={menu.id}>
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive ? "text-green-500" : ""
                  } mr-3 text-2xl font-bold border-none`
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
        <Link className="btn">Login</Link>
      </div>
    </div>
  );
};

export default Menu;
