import { useRef, useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { routes } from "./NavDesktop";
import { Link } from "react-router-dom";

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  return (
    <div ref={ref} className="lg:hidden">
      <Hamburger
        toggled={isOpen}
        size={20}
        toggle={setIsOpen}
        direction="right"
      />
      {isOpen && (
        <div className="fixed left-0 shadow-4xl right-0 top-[3.5rem] p-3 pt-0 bg-neutral-950 border-b border-b-white/20">
          <ul className="grid gap-2">
            {routes.map((route) => {
              const { Icon } = route;
              return (
                <li
                  onClick={() => setIsOpen(!isOpen)}
                  key={route.title}
                  className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-neutral-800 via-neutral-950 to-neutral-700">
                  <Link
                    to={route.href}
                    className={
                      "flex items-center justify-between w-full p-3 rounded-xl bg-neutral-950"
                    }>
                    <span className="flex gap-1 text-lg">{route.title}</span>
                    <Icon className="text-xl" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavMobile;
