import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
const MainLayout = () => {
  const location = useLocation();
  return (
    <div className="bg-neutral-950 text-white">
      {/* <Navbar /> */}
      {location.pathname === "/" ? (
        <div className="lg:w-4/5 mx-auto lg:py-6">
          <Navbar />
          <Outlet />
        </div>
      ) : (
        <div>
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default MainLayout;
