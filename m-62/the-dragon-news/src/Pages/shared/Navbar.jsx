import React from "react";
import logo from "../../assets/logo.png";
import Marquee from "react-fast-marquee";
import moment from "moment/moment";

const Navbar = () => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let tempDate = new Date();
  let date =
    tempDate.getFullYear() +
    "-" +
    (tempDate.getMonth() + 1) +
    "-" +
    tempDate.getDate() +
    " " +
    tempDate.getHours() +
    ":" +
    tempDate.getMinutes() +
    ":" +
    tempDate.getSeconds();
  const currDate = weekday[tempDate.getDay()] + ", " + date;
  return (
    <>
      {/* title bar */}
      <div className="my-8 flex flex-col items-center">
        <img className=" lg:w-3/12 mx-auto
         w-auto " src={logo} alt="" />
        <h2 className="mt-4 text-[#706F6F] text-2xl">
          Journalism Without Fear or Favour
        </h2>
        {/* <h3 className="mt-4 text-[#5c5959] text-xl">{currDate}</h3> */}
        <h3 className="mt-4 text-[#5c5959] text-xl">{moment().format('dddd, MMMM D, YYYY')}</h3>
      </div>

      <div className=" h-20 w-11/12 mx-auto px-3 flex justify-center items-center gap-4 bg-[#F3F3F3]">
        <div className="">
          {" "}
          <button className="bg-[#D72050] px-8 py-4 text-white font-semibold">
            Latest
          </button>
        </div>
        <Marquee>
          <div>
            <p className="text-[#403F3F] font-semibold">
              Match Highlights: Germany vs Spain — as it happened ! Match
              Highlights: Germany vs Spain as dragon news  |  Match Highlights: Germany vs Spain — as it happened ! Match
              Highlights: Germany vs Spain as dragon news
            </p>
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default Navbar;
