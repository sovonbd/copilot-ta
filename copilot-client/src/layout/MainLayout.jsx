import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Navbar1 from "../components/navbar/Navbar1";
const MainLayout = () => {
  return (
    <div className="bg-neutral-950 text-white">
      {/* <Navbar /> */}
      <Navbar1 />
      <Outlet />
    </div>
  );
};

export default MainLayout;
