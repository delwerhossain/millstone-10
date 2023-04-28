import React from "react";
import CompoCategory from "../../Components/CompoCategory/CompoCategory";
import RightSide from "../../Components/RightSide/RightSide";
import NewsCard from "../../Components/NewsHome/NewsHome";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const allNewsData = useLoaderData()

  return (
    <>
      {
        allNewsData.map((news)=> <NewsCard key={news._id} news={news}></NewsCard>)
      }
       
    </>
  );
};

export default Home;
