import { useRef, useState } from "react";
import { Spin as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { NavItems } from "./NavItems";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const { logOut } = useAuth();

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logged out successfully!");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div ref={ref} className="lg:hidden py-4">
      <Hamburger
        toggled={isOpen}
        size={20}
        toggle={setIsOpen}
        direction="right"
      />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 shadow-4xl right-0 p-3 pt-0 bg-neutral-950 rounded-md border-b border-b-white/20 z-10">
            <ul className="grid gap-2">
              {NavItems.filter((item) => item.title !== "Home").map(
                (route, idx) => {
                  const { Icon } = route;
                  return (
                    <motion.li
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        type: "tween",
                        stiffness: 150,
                        damping: 30,
                        delay: 0.1 + idx / 10,
                      }}
                      onClick={() => setIsOpen(!isOpen)}
                      key={route.title}
                      className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-neutral-800 via-neutral-950 to-neutral-700">
                      {route.title !== "Logout" ? (
                        <Link
                          to={route?.href}
                          className="flex items-center justify-between gap-4 w-full p-3 rounded-xl bg-neutral-950">
                          <span>{route.title}</span>
                          <Icon className="text-lg" />
                        </Link>
                      ) : (
                        <Link
                          className="flex items-center justify-between gap-4 w-full p-3 rounded-xl bg-neutral-950 text-red-500"
                          onClick={handleLogout}>
                          <span>{route.title}</span>
                          <Icon className="text-lg" />
                        </Link>
                      )}
                    </motion.li>
                  );
                }
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavMobile;
