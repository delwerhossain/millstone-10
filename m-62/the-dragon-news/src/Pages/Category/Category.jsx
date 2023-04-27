import React from 'react';
import { useParams } from 'react-router-dom';

const Category = () => {
    let {id}=useParams()
    return (
        <div>
            <h1> thin id Category -- { id}</h1>
        </div>
    );
};

export default Category;