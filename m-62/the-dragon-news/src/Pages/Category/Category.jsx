import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "../../Components/NewsCard/NewsCard";

const Category = () => {
  let { id } = useParams();
  const categoryNews = useLoaderData();
  return (
    <div>
      {/* <h1> thin  Category length -- {categoryNews.length}</h1> */}
      {categoryNews.map((news) => (
        <NewsCard key={news._id} news={news}></NewsCard>
      ))}
    </div>
  );
};

export default Category;
