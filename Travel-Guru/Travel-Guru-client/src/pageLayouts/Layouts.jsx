import React from "react";
import { Outlet } from "react-router-dom";

const Layouts = () => {
  return (
    <div>
      <h1 className="text-4xl text-red-500">this Layouts</h1>
      <Outlet></Outlet>
    </div>
  );
};

export default Layouts;
