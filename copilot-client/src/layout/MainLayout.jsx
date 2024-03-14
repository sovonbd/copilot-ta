import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import ChatBubble from "../components/chatBubble/chatBubble";
const MainLayout = () => {
  const location = useLocation();
  return (
    <div className="bg-neutral-950 text-white overflow-auto lg:overflow-visible">
      {/* <Navbar /> */}
      {location.pathname === "/" ||
      location.pathname === "/about" ||
      location.pathname === "/contact" ? (
        <div className="lg:w-4/5 mx-auto lg:py-6">
          <Navbar />
          <Outlet />
        </div>
      ) : (
        <div>
          <Outlet />
        </div>
      )}
      <ChatBubble className="relative z-10" />

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        style={{ width: "auto" }}
      />
    </div>
  );
};

export default MainLayout;
