import { useRef, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BiHomeAlt2 } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import { toast } from "react-toastify";

const UserNav = [
  {
    title: "Dashboard",
    href: "/dashboard",
    Icon: BiHomeAlt2,
  },
  {
    title: "Logout",
    Icon: FiLogOut,
  },
];
const UserItem = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const { user, logOut } = useAuth();

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logged out successfully!");
      })
      .catch((err) => console.log(err));
  };

  return user ? (
    <div>
      <img
        src={user?.photoURL}
        className="w-10 border-2 p-1 rounded-full border-gray-200 hover:scale-110 duration-300 cursor-pointer"
        alt=""
        onClick={() => setIsOpen(!isOpen)}
      />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute rounded-md shadow-4xl right-36 top-20 p-3 pt-0 bg-neutral-950 border-b border-b-white/20">
            <ul className="grid gap-2">
              {UserNav.map((route, idx) => {
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
                    className="w-40 p-[0.08rem] rounded-xl  hover:bg-gradient-to-tr from-neutral-800 via-neutral-950 to-neutral-700">
                    {route.title !== "Logout" ? (
                      <Link
                        to={route.href}
                        className={
                          "flex gap-2 items-center w-full p-3 rounded-xl bg-neutral-950 hover:text-red-500 duration-500"
                        }>
                        <Icon className="text-lg" />
                        <span className="text-base">{route.title}</span>
                      </Link>
                    ) : (
                      <Link
                        onClick={handleLogout}
                        className={
                          "flex gap-2 items-center w-full p-3 rounded-xl bg-neutral-950 hover:text-red-500 duration-500"
                        }>
                        <Icon className="text-lg" />
                        <span className="text-base">{route.title}</span>
                      </Link>
                    )}
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  ) : (
    ""
  );
};

export default UserItem;
