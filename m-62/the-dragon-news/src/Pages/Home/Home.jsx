import React from "react";
import Category from "../../Components/Category/Category";
import NewsHome from "../../Components/NewsHome/NewsHome";

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-5">
        <div className="bg-blue-100 col-span-1">
          <Category></Category>
        </div>
        <div className="bg-red-100 col-span-3">
          <NewsHome></NewsHome>
        </div>
        <div className="bg-yellow-100 col-span-1">
          <h1>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo magni
            cupiditate iste.
          </h1>
          <h1>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo magni
            cupiditate iste.
          </h1>
          <h1>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo magni
            cupiditate iste.
          </h1>
          <h1>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo magni
            cupiditate iste.
          </h1>
          <h1>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo magni
            cupiditate iste.
          </h1>
        </div>
      </div>
    </>
  );
};

export default Home;
