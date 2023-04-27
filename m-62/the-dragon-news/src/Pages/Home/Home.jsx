import React from "react";
import Category from "../../Components/CompoCategory/CompoCategory";
import NewsHome from "../../Components/NewsHome/NewsHome";
import RightSide from "../../Components/RightSide/RightSide";

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-5 w-11/12 mx-auto">
        <div className=" col-span-1">
          <Category></Category>
        </div>
        <div className=" col-span-3">
          <NewsHome></NewsHome>
        </div>
        <div className="col-span-1">
          <RightSide></RightSide>
        </div>
      </div>
    </>
  );
};

export default Home;
