import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../pages/dashboard/dashboard/Sidebar";
import ChatBubble from "../components/chatBubble/chatBubble";
import Dashboard from "../pages/dashboard/dashboard/Dashboard";
import ReturnPortfolio from "../components/returnPortfolio/ReturnPortfolio";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <div>
      <ReturnPortfolio />
      <div className="bg-neutral-950 text-white px-5 overflow-auto relative">
        <div className="py-4">
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        </div>
        <div
          className={`transition-all duration-500 ease-in-out  ${
            sidebarOpen &&
            (location.pathname === "/dashboard/subscription" ||
              location.pathname === "/dashboard/downloads")
              ? "md:w-4/5 mx-auto relative left-[11%] transition-all duration-300 ease-in-out"
              : "left-0 md:relative"
          }`}>
          <Outlet />
          {location.pathname === "/dashboard" && <Dashboard />}

          <ChatBubble className="relative z-10" />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
