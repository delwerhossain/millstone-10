import React from "react";
import CompoCategory from "../../Components/CompoCategory/CompoCategory";
import RightSide from "../../Components/RightSide/RightSide";
import NewsHome from "../../Components/NewsHome/NewsHome";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const allNewsData = useLoaderData()

  return (
    <>
      {
        allNewsData.map((news)=> <NewsHome key={news._id} news={news}></NewsHome>)
      }
       
    </>
  );
};

export default Home;
