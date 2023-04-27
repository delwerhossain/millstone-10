import React from "react";
import Category from "../../Components/Category/Category";
import NewsHome from "../../Components/NewsHome/NewsHome";
import RightSide from "../../Components/RightSide/RightSide";

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-5 w-11/12 mx-auto">
        <div className="bg-blue-100 col-span-1">
          <Category></Category>
        </div>
        <div className="bg-red-100 col-span-3">
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
