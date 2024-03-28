import { Link } from "react-router-dom";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center lg:w-auto mx-auto">
        <Link
          to="/"
          className="relative text-2xl text-left top-3 font-bold pb-4 pl-2 md:pl-0  hover:scale-110 transition duration-300">
          Virtual <span className="text-red-600">Reality</span>
        </Link>
        <NavDesktop />
        <NavMobile />
      </div>
    </div>
  );
};

export default Navbar;
