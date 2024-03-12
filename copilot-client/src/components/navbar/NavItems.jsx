import { BiHomeAlt2 } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { IoPricetagsOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";

export const NavItems = [
  {
    title: "Dashboard",
    href: "/",
    Icon: BiHomeAlt2,
  },
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
    title: "Logout",
    Icon: FiLogOut,
  },
];
