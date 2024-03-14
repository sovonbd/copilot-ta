import { useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AnimatePresence, motion } from "framer-motion";
import { useClickAway } from "react-use";
import { AiOutlineRollback } from "react-icons/ai";
import { BiHomeSmile, BiUser } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import { BsDownload } from "react-icons/bs";
import { Link } from "react-router-dom";
import logo from "../../../assets/CoPilotXR_02.png";
import useAuth from "../../../hooks/useAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const items = [
  { title: "Profile", Icon: BiUser, href: "/dashboard/profile" },
  { title: "Subscription", Icon: BiHomeSmile, href: "/dashboard/subscription" },
  {
    title: "Downloads",
    Icon: BsDownload,
    href: "/dashboard/downloads",
  },
];

const framerSidebarBackground = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0, transition: { delay: 0.2 } },
  transition: { duration: 0.3 },
};

const framerSidebarPanel = {
  initial: { x: "-100%" },
  animate: { x: 0 },
  exit: { x: "-100%" },
  transition: { duration: 0.3 },
};

const framerText = (delay) => {
  return {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: {
      delay: 0.5 + delay / 10,
    },
  };
};

const framerIcon = {
  initial: { scale: 0 },
  animate: { scale: 1 },
  transition: {
    type: "spring",
    stiffness: 260,
    damping: 20,
    delay: 1.5,
  },
};

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const { user, logOut } = useAuth();

  const ref = useRef(null);
  useClickAway(ref, () => setSidebarOpen(false));
  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logged out successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="p-3 border-2 border-zinc-800 rounded-xl"
        aria-label="toggle sidebar">
        <GiHamburgerMenu />
      </button>
      <AnimatePresence mode="wait" initial={false}>
        {sidebarOpen && (
          <>
            <motion.div
              {...framerSidebarBackground}
              aria-hidden="true"
              className="fixed bottom-0 left-0 right-0 top-0 z-40 bg-[rgba(0,0,0,0.1)]"></motion.div>
            <motion.div
              {...framerSidebarPanel}
              className="fixed top-0 bottom-0 left-0 z-50 w-full h-screen max-w-xs  border-zinc-800 bg-zinc-900"
              ref={ref}
              aria-label="Sidebar">
              <div className="flex items-center justify-between p-5 border-b-2 border-zinc-800 pb-10">
                <Link to="/">
                  <img
                    src={logo}
                    className="w-28 hover:scale-110 duration-300"
                    alt=""
                  />
                </Link>
                <button
                  onClick={toggleSidebar}
                  className="p-3 border-2 border-zinc-800 rounded-xl"
                  aria-label="close sidebar">
                  <AiOutlineRollback />
                </button>
              </div>
              <div className="flex flex-col justify-between h-screen">
                <ul>
                  {items.map((item, idx) => {
                    const { Icon } = item;
                    return (
                      <li key={item?.title}>
                        <a
                          onClick={toggleSidebar}
                          href={item?.href}
                          className="flex items-center justify-between gap-5 p-5 transition-all border-b-2 hover:text-red-500 border-zinc-800 hover:text-lg duration-300 hover:ease-in-out md:h-16">
                          <motion.span {...framerText(idx)}>
                            {item?.title}
                          </motion.span>
                          <motion.div {...framerIcon}>
                            <Icon className="text-2xl" />
                          </motion.div>
                        </a>
                      </li>
                    );
                  })}
                </ul>
                <motion.button
                  onClick={handleLogout}
                  {...framerText(4)}
                  className="p-5 border-t-2 border-zinc-800 duration-300  hover:text-red-500 hover:text-lg text-white relative bottom-[22%] lg:bottom-[16%] flex items-center justify-center hover:ease-in-out md:h-16 gap-2">
                  <motion.span> Logout</motion.span>
                  <FiLogOut className="text-xl" />
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <ToastContainer />
    </>
  );
};

export default Sidebar;
