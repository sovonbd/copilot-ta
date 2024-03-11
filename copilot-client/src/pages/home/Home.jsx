import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Logo from "../../assets/CoPilotXR_02.png";
import useAuth from "../../hooks/useAuth";

const Home = () => {
  const { user, logOut } = useAuth();

  return (
    <div>
      <div className="lg:w-4/5 mx-auto lg:py-6">
        <div className="flex justify-between items-center lg:w-auto mx-auto">
          <Link
            to="/"
            className="scale-100 cursor-pointer rounded-2xl px-4 py-2 text-xl font-semibold  transition-all duration-200 hover:scale-110">
            <img src={Logo} className="w-40" alt="" />
          </Link>

          {user ? (
            <img
              src={user.photoURL}
              className="w-10 border-2 px-0 py-1 rounded-full border-gray-200 hover:scale-110 duration-300"
              alt=""
            />
          ) : (
            <Navbar />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
