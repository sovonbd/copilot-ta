import { Link } from "react-router-dom";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";
import Logo from "../../assets/CoPilotXR_02.png";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center lg:w-auto mx-auto">
        <Link
          to="/"
          className="scale-100 cursor-pointer rounded-2xl px-4 py-2 text-xl font-semibold  transition-all duration-200 hover:scale-110">
          <img src={Logo} className="w-40" alt="" />
        </Link>
        <NavDesktop />
        <NavMobile />
      </div>
    </div>
  );
};

export default Navbar;
