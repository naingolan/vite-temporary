import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="flex flex-row bg-[#262D56] h-16 items-center justify-between">
      <img src="blacklogo.png" className="w-16 h-16 ml-10 pt-1" alt="logo" />
        <ul className="flex flex-row space-x-6 mr-10">
          {/* <li>
            <img src="blacklogo.jpeg" className="w-16 h-16 " alt="logo" />
          </li> */}
          <div className="flex space-x-6 mr-16">
            <li className="text-white">
              <Link to="/" className="text-white hover:text-gray-300">
                Home
              </Link>
            </li>
            <li className="text-white">
              <Link to="/about-us" className="text-white hover:text-gray-300">
                About Us
              </Link>
            </li>
            <li className="text-white">
              <Link to="/contact-us" className="text-white hover:text-gray-300">
                Contact Us
              </Link>
            </li>
            <li className="text-white">
              <Link to="/books" className="text-white hover:text-gray-300">
                Books
              </Link>
            </li>
          </div>
          <li className="text-white">
            <Link to="/register" className="text-white hover:text-gray-300">
              Register
            </Link>
          </li>
          <li className="text-white">
            <Link to="/login" className="text-white hover:text-gray-300">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
