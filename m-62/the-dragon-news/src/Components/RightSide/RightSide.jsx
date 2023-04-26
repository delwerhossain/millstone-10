import React from "react";
import { IconContext } from "react-icons";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
const RightSide = () => {
  return (
    <div>
      <IconContext.Provider value={{ size: "2em" }}>
        <div>
          <h1 className="text-2xl font-semibold my-4 text-center">Login With</h1>
          <div className="grid gap-2 mx-2">
            <button className="flex gap-2 btn btn-outline btn-info">
              {" "}
              <FcGoogle></FcGoogle>
              Login With Google
            </button>
            {/* <h3> Lets go for a <FcGoogle />? </h3> */}
            <button className="flex gap-2 btn btn-outline ">
              <BsGithub ></BsGithub> Login With Git
            </button>
          </div>
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default RightSide;
