import React from "react";

const NewsCard = ({ news }) => {
  const { _id, title, details, image_url, author } = news;
  const {name,published_date ,img} =author
  return (
      <div>
          {/* <h1 className='text-2xl font-semibold'>{title}</h1> */}
          <div className="mb-6 lg:mb-0">
      <div className="relative block bg-white rounded-lg shadow-lg">
          <h3 className="font-bold text-xl py-8 text-start mx-4 ">{ title}</h3>
          <div className="flex">
          <div className="relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg mx-4 -mt-4" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img src={image_url} className="w-full" />
            <a href="#!">
              <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}} />
            </a>
          </div>
        </div>
          <div className="p-6">
            
          <h5 className="font-bold text-lg mb-3">Travel to Italy</h5>
          <p className="text-gray-500 mb-4">
              <small>Published <u>{published_date}</u> <br /> 
                <a href className="text-gray-900 mx-2 flex gap-3 my-3 items-center "> <a href >by</a> <img className='w-8 rounded-full' src={img} alt="" /> <p>{name}</p></a></small>
          </p>
          <p className="mb-4 pb-2">
           {details}
          </p>
          <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Read
            more</a>
        </div>
      </div>
    </div>
      </div>
  );
};

export default NewsCard;
