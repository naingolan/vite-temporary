import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="flex flex-col items-center justify-centerr bg-[#262D56] h-64">
        {/* <p className="text-white mt-10 text-3xl font-semibold">econnect.co.tz</p> */}
        <div className="flex flex-row space-x-5 mt-10">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M35 13H35.02M14 4H34C39.5228 4 44 8.47715 44 14V34C44 39.5228 39.5228 44 34 44H14C8.47715 44 4 39.5228 4 34V14C4 8.47715 8.47715 4 14 4ZM32 22.74C32.2468 24.4045 31.9625 26.1044 31.1875 27.598C30.4125 29.0916 29.1863 30.3028 27.6833 31.0593C26.1802 31.8159 24.4769 32.0792 22.8156 31.8119C21.1543 31.5445 19.6195 30.7602 18.4297 29.5703C17.2398 28.3805 16.4555 26.8457 16.1881 25.1844C15.9208 23.5231 16.1841 21.8198 16.9407 20.3167C17.6972 18.8137 18.9084 17.5875 20.402 16.8125C21.8956 16.0375 23.5955 15.7532 25.26 16C26.9578 16.2518 28.5297 17.0429 29.7434 18.2566C30.9571 19.4703 31.7482 21.0422 32 22.74Z"
              stroke="#F3F3F3"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M35.2087 3H41.6745L27.5486 18.4431L44.1667 39.4576H31.1549L20.9636 26.7124L9.3024 39.4576H2.83266L17.9417 22.9395L2 3H15.3421L24.5542 14.6496L35.2087 3ZM32.9394 35.7558H36.5222L13.3953 6.50741H9.55063L32.9394 35.7558Z"
              fill="white"
            />
          </svg>
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M36 4H30C27.3478 4 24.8043 5.05357 22.9289 6.92893C21.0536 8.8043 20 11.3478 20 14V20H14V28H20V44H28V28H34L36 20H28V14C28 13.4696 28.2107 12.9609 28.5858 12.5858C28.9609 12.2107 29.4696 12 30 12H36V4Z"
              stroke="#F3F3F3"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="flex flex-row mt-8">
          <ul className="flex flex-row space-x-10 mb-0 ju">
            <li className="text-white">
              <Link
                to="/contact-us"
                className="text-white text-xs hover:text-gray-300"
              >
                Contact us
              </Link>
            </li>
            <li className="text-white">
              <Link
                to="/about-us"
                className="text-white text-xs hover:text-gray-300"
              >
                About Us
              </Link>
            </li>
            <li className="text-white">
              <Link
                to="/terms-and-conditions"
                className="text-white text-xs hover:text-gray-300"
              >
                Terms and Privacy Policy
              </Link>
            </li>
            <li className="text-white">
              <Link
                to="/copyright"
                className="text-white text-xs hover:text-gray-300"
              >
                Copyright
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center bg-[#131834] w-full mt-20 h-12 ">
          <p className="text-white  text-xs mt-2">
            Coyright @2024 all rights reserved
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
