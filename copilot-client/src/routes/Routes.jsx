import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import PrivateRoutes from "./PrivateRoutes";
import DashboardLayout from "../layout/DashboardLayout";
import Profile from "../pages/dashboard/profile/Profile";
import Subscription from "../pages/dashboard/subscription/Subscription";
import Downloads from "../pages/dashboard/downloads/Downloads";
import Dashboard from "../pages/dashboard/dashboard/Dashboard";
import Contact from "../pages/contact/Contact";
import AboutUs from "../pages/aboutUs/AboutUs";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoutes>
            <Home />
          </PrivateRoutes>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },

  // Dashboard routes
  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout />
      </PrivateRoutes>
    ),
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "subscription",
        element: <Subscription />,
      },
      {
        path: "downloads",
        element: <Downloads />,
      },
    ],
  },
]);

export default Routes;
