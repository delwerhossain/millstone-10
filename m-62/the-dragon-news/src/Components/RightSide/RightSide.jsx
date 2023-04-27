import React from "react";
import { IconContext } from "react-icons";
import { FcGoogle } from "react-icons/fc";
import { BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { GrFacebookOption } from "react-icons/gr";
import qZone1 from '../../assets/qZone1.png'
import qZone2 from '../../assets/qZone2.png'
import qZone3 from '../../assets/qZone3.png'
import rightBanner from '../../assets/bg1.png'
const RightSide = () => {
  return (
    <div>
      <IconContext.Provider value={{ size: "2em" }}>
        <div>
          <h1 className="text-2xl font-semibold my-4 text-center">
            Login With
          </h1>
          <div className="grid gap-2 mx-2">
            <button className="flex gap-2 btn btn-outline btn-info">
              {" "}
              <FcGoogle></FcGoogle>
              Login With Google
            </button>
            {/* <h3> Lets go for a <FcGoogle />? </h3> */}
            <button className="flex gap-2 btn btn-outline ">
              <BsGithub></BsGithub> Login With Git
            </button>
          </div>
        </div>
      </IconContext.Provider>
      <div>
        <h1 className="text-2xl font-semibold my-4 text-center">Find Us On</h1>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <tbody className="text-center border">
              <tr>
                <th className="flex pl-16 p text-center items-center gap-2 font-semibold text-xl">
                  <GrFacebookOption className="text-[#3B599C] w-8 h-8 p-1  rounded-full bg-slate-300" />{" "}
                  <span className="mx-4 text-center">Facebook</span>
                </th>
              </tr>
              <tr>
                <th className="flex pl-16 p text-center items-center gap-2 font-semibold text-xl">
                  <BsTwitter className="text-[#58A7DE] w-8 h-8 p-1  rounded-full bg-slate-300" />{" "}
                  <span className="mx-4 text-center">Twitter</span>
                </th>
              </tr>
              <tr>
                <th className="flex pl-16 p text-center items-center gap-2 font-semibold text-xl">
                  <BsInstagram className=" w-8 h-8  bg-slate-50" />{" "}
                  <span className="mx-4 text-center">Instagram</span>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-[#F3F3F3]">
        <h1 className="text-xl font-semibold w-1/2 mx-auto text-center py-2 ">Q-Zone</h1>
        <div className="py-4  rounded ">
          <div className="w-11/12 mx-auto"><img src={qZone1} alt="" />
          <img src={qZone2} alt="" />
          <img src={qZone3} alt="" /></div>
        </div>
      </div>
      {/* image banner  */}
      <div className={`bg-[url(${rightBanner})]`}>
      </div>
    </div>
  );
};

export default RightSide;
