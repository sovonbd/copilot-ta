import { Link } from "react-router-dom";
import { NavItems } from "./NavItems";
import UserItem from "./UserItem";

const NavDesktop = () => {
  return (
    <div>
      <ul className="hidden lg:flex lg:items-center gap-5 text-lg">
        {NavItems.map((route, index) => (
          <li key={index}>
            {route.title === "Logout" || route.title === "Dashboard" ? (
              ""
            ) : (
              <Link
                to={route.href}
                className="hover:text-red-500 transition duration-500 ">
                {route.title}
              </Link>
            )}
          </li>
        ))}
        <li className="hidden lg:inline">
          <UserItem />
        </li>
      </ul>
    </div>
  );
};

export default NavDesktop;
