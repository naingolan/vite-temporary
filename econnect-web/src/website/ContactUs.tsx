import { ChangeEvent, useEffect, useState } from "react";
import NavBar from "../website/NavBar";
import InputField from "../components/InputField";
import Footer from "./Footer";

const ContactUs = () => {
  useEffect(() => {
    console.log("Works perfectly fine");
    //getClasses();
  }, []);

  return (
    <>
      <NavBar />
      <div className="bg-[#262D56] h-screen flex flex-col justify-between">
        <div className="flex flex-row pr-20 ptt-5 pl-20  bg-redd-400">
          <div className="pt-40 ">
            <p className="text-3xl text-white pll-20 flex justify-center">
              Contact Us
            </p>
            <p className="flex text-xl text-white text-wrap pt-8 justify-center ">
              In case you would like to contact us directly, please use the
              below contacts.
            </p>
            <div className="px-56 pt-8">
              <div className="text-white text-2xls m">
                <div className="flex justify-start items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-phone-call"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#ffffff"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                    <path d="M15 7a2 2 0 0 1 2 2" />
                    <path d="M15 3a6 6 0 0 1 6 6" />
                  </svg>
                  <p> Phone: 0788741194/0758061582</p>
                </div>
                <div className="flex justify-start items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-at"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#ffffff"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                    <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28" />
                  </svg>
                  <p>Email Address: info@econnect.co.tz</p>
                </div>
                <div className="flex justify-start items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-map-pin"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#ffffff"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                  </svg>
                  <p>Location: Dar es salaam, Tanzania</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-5 bg-[#f8f9fa] min-h-96 w-1/2 ml-auto roundedd-tl-full rounded-md pb-7 justify-centerr items-center pt-10 mt-10">
            <div className="w">
              <InputField
                placeholder="Email"
                //value=""
                onChange={() => {}}
                name="email"
              />
            </div>
            <div>
              <InputField
                placeholder="Subject"
                //value=""
                onChange={() => {}}
                name="subject"
              />
            </div>
            <div>
              <InputField
                placeholder="Phone Number"
                //value=""
                onChange={() => {}}
                name="phoneNumber"
              />
            </div>
            <div>
              <InputField
                placeholder="Address"
                //value=""
                type="address"
                onChange={() => {}}
                name="address"
              />
            </div>
            <div>
              <textarea
                className="h-10 pl-4 w-80 min-h-40 border-gray-200 border"
                placeholder="Body"
              ></textarea>
            </div>
            <div>
              <button
                className=" bg-[#0C6FFF] text-2xl text-white h-12 w-80 rounded-lg pdt-20"
                onClick={() => {}}
              >
                Send
              </button>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default ContactUs;
