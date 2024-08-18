import { ChangeEvent, useEffect, useState } from "react";
import NavBar from "../website/NavBar";
import InputField from "../components/InputField";
import { Link } from "react-router-dom";

const Login = () => {
  useEffect(() => {
    console.log("Works perfectly fine");
    //getClasses();
  }, []);

  return (
    <>
      <NavBar />
      <div className="bg-[#262D56] h-screen flex flex-col justify-between">
        <div className="flex flex-row pr-60 ptt-5 pl-60  bg-redd-400">
          <div className="pt-40 flex flex-col justify-center items-center space-y-5">
            <p className="text-3xl text-white pll-20 flex justify-center">
              Welcome to Econnect TZ
            </p>
            <p className="flex text-xl text-white text-wrap pt-8 justify-center ">
              Dont't have an accout?
            </p>
            <Link
                to="/register"
                className=" bg-[#f8f9fa] text-2xl text-whitei h-12 w-60 rounded-lg flex  justify-center items-center"
              >
                Register
              </Link>
          </div>
          <div className="flex flex-col mt-40 space-y-5 bg-[#f8f9fa] min-h-96 w-1/2 ml-auto roundedd-tl-full rounded-md pb-7 justify-center items-center pt-10 -10">
            <div className="w">
              <InputField
                placeholder="Phone Number Or Email"
                //value=""
                onChange={() => {}}
                name="email"
              />
            </div>
            <div>
              <InputField
                placeholder="Password"
                //value=""
                onChange={() => {}}
                name="subject"
              />
            </div>
            {/* <div>
              <textarea
                className="h-10 pl-4 w-80 min-h-40 border-gray-200 border"
                placeholder="Body"
              ></textarea>
            </div> */}
            <div>
              <button
                className=" bg-[#0C6FFF] text-2xl text-white h-12 w-80 rounded-lg pdt-20"
                onClick={() => {}}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
