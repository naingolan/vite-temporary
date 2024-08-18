import NavBar from "./NavBar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <NavBar />
      <div
        className="flex items-centerr justify-center bg-slate-500 h-screen"
        style={{
          backgroundImage: "url('econnect.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* <h1 className="text-3xl font-bold underline text-red-600">
          {props.heading}
        </h1> */}
        <div className="flex flex-row space-x-24  mt-56">
          <Link
            to="/schools-with-talent"
            className="bg-[#0C6FFF] text-white  h-12 w-60 rounded-lg flex justify-center items-center"
          >
            Schools With Talents
          </Link>
          <Link
            to="/sports-and-arts"
            className="bg-[#0C6FFF] text-white h-12 w-60 rounded-lg flex justify-center items-center"
          >
            Sports And Arts
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
