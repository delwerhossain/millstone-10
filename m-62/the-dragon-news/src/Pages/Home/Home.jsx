import React from "react";
import CompoCategory from "../../Components/CompoCategory/CompoCategory";
import RightSide from "../../Components/RightSide/RightSide";
import { useLoaderData } from "react-router-dom";
import NewsCard from "../../Components/NewsCard/NewsCard";

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
