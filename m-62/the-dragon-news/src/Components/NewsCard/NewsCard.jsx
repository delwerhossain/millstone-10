import moment from "moment/moment";
import React, { useState } from "react";
import { IconContext } from "react-icons";
import { BsBookmark, BsShare } from "react-icons/bs";
import { AiFillStar, AiOutlineEye, AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { _id, title, details, image_url, author, total_view, rating } = news;
  const { name, published_date, img } = author;
  const [readAll, setReadAll] = useState(true);
  return (
    <div className="grid justify-center items-center mx-2 mb-8">
      {/* <h1 className='text-2xl font-semibold'>{title}</h1> */}
      <div className="mb-6 lg:mb-0">
        <div className="relative block bg-white rounded-lg shadow-lg">
          <div className="flex justify-end gap-4 py-3  px-10 rounded bg-slate-100">
            <IconContext.Provider value={{ size: "2em" }}>
              <BsBookmark className="w-6"></BsBookmark>{" "}
              <BsShare className="w-6"></BsShare>
            </IconContext.Provider>
          </div>
          {/* use for links  */}

          <div>
            <div className="py-8 text-start mx-4">
            <Link className="text-2xl font-semibold text-center my-3 py-1 hover:uppercase hover:underline bg-cyan-50 rounded-xl" to={`/news/${_id}`}> Details
            </Link>
            <h3 className="font-bold text-xl  ">{title}</h3>
            </div>
          <div className="flex">
            <img src={image_url} className="w-11/12 mx-auto" />
          </div>
         
         </div>
          <div className="p-6">
            <h5 className="font-bold text-lg mb-3">Travel to Italy</h5>
            <p className="text-gray-500 mb-4">
              <small>
                Published <u>{moment(published_date).format("MMMM Do YYYY")}</u>{" "}
                <br />
                <a
                  href
                  className="text-gray-900 mx-2 flex gap-3 my-3 items-center "
                >
                  {" "}
                  <a href>by</a>{" "}
                  <img className="w-8 rounded-full" src={img} alt="" />{" "}
                  <p>{name}</p>
                </a>
              </small>
            </p>
            <p className="mb-4 pb-2">
              {readAll ? details.slice(0, 250) : details}...
            </p>
            <button
              onClick={() => setReadAll(!readAll)}
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              {readAll ? "Read more" : "wrap"}
            </button>
          </div>
          <div className=" bg-slate-100 rounded flex items-center justify-between">
            <div className="ml-6">
              <IconContext.Provider value={{ size: "2em" }}>
                <Rating
                  className=""
                  placeholderRating={rating?.number}
                  emptySymbol={<AiOutlineStar className="w-6"></AiOutlineStar>}
                  placeholderSymbol={<AiFillStar className="w-6"></AiFillStar>}
                  fullSymbol={<AiFillStar className="w-6"></AiFillStar>}
                />
              </IconContext.Provider>
            </div>
            <div className="flex gap-1  pr-8 py-3 my-4 justify-end items-center">
              <IconContext.Provider value={{ size: "2em" }}>
                <AiOutlineEye className="w-6"></AiOutlineEye> {total_view}
              </IconContext.Provider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
