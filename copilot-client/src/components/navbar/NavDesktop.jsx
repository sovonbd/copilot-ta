import { BiHomeAlt2 } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { PiChatCircleBold } from "react-icons/pi";
import { IoPricetagsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export const routes = [
  {
    title: "Home",
    href: "/",
    Icon: BiHomeAlt2,
  },
  {
    title: "Login",
    href: "/login",
    Icon: FiSearch,
  },
  {
    title: "Register",
    href: "/register",
    Icon: IoPricetagsOutline,
  },
  {
    title: "About",
    href: "#",
    Icon: PiChatCircleBold,
  },
];

const NavDesktop = () => {
  return (
    <div>
      <ul className="hidden lg:flex lg:items-center gap-5 text-sm">
        {routes.map((route, index) => (
          <li key={index}>
            <Link to={route.href}>{route.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavDesktop;
