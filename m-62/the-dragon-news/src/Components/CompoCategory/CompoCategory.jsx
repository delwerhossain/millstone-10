import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const  CompoCategory = () => {
  const [category, setCategory] = useState([])
  useEffect(() => {
    const url = "http://localhost:3000/category";

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
  console.log(category);
  return (
    <div>
      {category.map((cate) => <h1 className="lg:text-xl font-semibold mb-2">
        <Link to={`/category/${cate.id}`}>{cate.name}</Link>
      </h1>)}
    </div>
  );
};

export default CompoCategory;
