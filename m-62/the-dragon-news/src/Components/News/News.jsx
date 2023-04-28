import React from "react";
import { useParams } from "react-router-dom";

const News = () => {
    const {id} = useParams()
  return (
    <div>
          <h1 className="text-6xl font-semibold my-12"> Dragon News Home</h1>
    </div>
  );
};

export default News;
