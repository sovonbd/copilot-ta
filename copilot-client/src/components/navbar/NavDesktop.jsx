import { Link } from "react-router-dom";
import { NavItems } from "./NavItems";

const NavDesktop = () => {
  return (
    <div>
      <ul className="hidden lg:flex lg:items-center gap-5 text-lg">
        {NavItems.map((route, index) => (
          <li key={index}>
            <Link
              to={route.href}
              className="hover:text-red-500 transition duration-500 ">
              {route.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavDesktop;
