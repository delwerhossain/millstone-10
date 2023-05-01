import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // import the styles

import slider1 from "../../assets/images/Sajek.png";
import slider2 from "../../assets/images/Sreemongol.png";
import slider3 from "../../assets/images/sundorbon.png";

const Home = () => {
  return (
    <div className="my-16 flex">
      <div className="w-11/12">
        <h1 className="text-6xl font-bold text-white">Cox's bazar</h1>
        <p className="text-xl">
          {" "}
          Cox's Bazar is a city, fishing port, tourism centre and district
          headquarters in southeastern Bangladesh. It is famous mostly for its
          long natural sandy beach, and it ...
        </p>
        <button className="btn">Booking </button>
          </div>
          

      <div className="w-11/12 flex gap-2">
        <div>
          <img className=" " src={slider1} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img className=" " src={slider2} />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img className=" " src={slider3} />
          <p className="legend">Legend 3</p>
        </div>
        {/* <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
          <div>
            <img className=" " src={slider1} />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img className=" "  src={slider2} />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img className=" " src={slider3} />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel> */}
      </div>
    </div>
  );
};

export default Home;
