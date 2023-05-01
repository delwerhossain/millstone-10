import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "../pages/Common/Menu";
import bgImage from "./../assets/images/Rectangle.png";

const Layouts = () => {
  const customStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    // filter: "brightness(0.3)",
  };
  return (
    <>
      <div
        style={customStyle}
        className={``}
      >
        <div className="z">
          <Menu></Menu>
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default Layouts;
