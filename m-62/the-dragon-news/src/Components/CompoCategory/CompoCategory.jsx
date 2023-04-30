import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const  CompoCategory = () => {
  const [category, setCategory] = useState([])
  useEffect(() => {
    const url = "https://server-dragon-news-delwerhossain.vercel.app/category";

    // Create async function 
    const fetchCategory = async () => {
        try {
            const response = await fetch(url);
            const jsonData = await response.json();
            setCategory(jsonData);
        } catch (error) {
            console.log("error fetchCategory :", error);
        }
    };

    // Call fetch function 
    fetchCategory();
  }, []);
  return (
    <div>
      {category.map((cate) => <div key={cate.id} className="lg:text-xl font-semibold mb-2">
        <Link to={`/category/${cate.id}`}>{cate.name}</Link>
      </div>)}
    </div>
  );
};

export default CompoCategory;
