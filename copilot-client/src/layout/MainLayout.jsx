import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
const MainLayout = () => {
  return (
    <div className="bg-neutral-950 text-white">
      {/* <Navbar /> */}

      <Outlet />

      <ToastContainer />
    </div>
  );
};

export default MainLayout;
