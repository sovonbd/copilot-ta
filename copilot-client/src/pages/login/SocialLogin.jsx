import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import facebookpng from "../../assets/facebook-96.png";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";

const SocialLogin = () => {
  const { googleSignIn, githubSignIn, facebookSignIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosPublic = useAxiosPublic();
  const from = location.state?.from?.pathname || "/";
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        // console.log(res.user);
        const userInfo = {
          email: res.user?.email,
          name: res.user?.displayName,
          image: res.user?.photoURL,
        };
        // console.log(userInfo);
        axiosPublic.post("/users", userInfo).then((res) => {
          // console.log(res.data);
        });
        toast.success("Successfully Logged in!");

        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err));
  };

  const handleFacebookSignIn = () => {
    facebookSignIn()
      .then((res) => {
        console.log(res.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGithubSignIn = () => {
    githubSignIn()
      .then((res) => {
        // console.log(res.user);
        const userInfo = {
          email: res.user?.email,
          name: res.user?.displayName,
          image: res.user?.photoURL,
        };
        // console.log(userInfo);
        axiosPublic.post("/users", userInfo).then((res) => {
          // console.log(res.data);
        });
        toast.success("Successfully Logged in!");

        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err));
  };

  const [googleHovered, setGoogleHovered] = useState(false);
  const [facebookHovered, setFacebookHovered] = useState(false);

  const handleGoogleMouseEnter = () => {
    setGoogleHovered(true);
  };

  const handleGoogleMouseLeave = () => {
    setGoogleHovered(false);
  };

  const handleFacebookMouseEnter = () => {
    setFacebookHovered(true);
  };

  const handleFacebookMouseLeave = () => {
    setFacebookHovered(false);
  };

  return (
    <div className="flex gap-8 justify-center pt-6 text-2xl text-white w-full">
      <button
        onClick={handleGoogleSignIn}
        className="icon-container"
        onMouseEnter={handleGoogleMouseEnter}
        onMouseLeave={handleGoogleMouseLeave}>
        {googleHovered ? (
          <FcGoogle className="hover:scale-[1.7] transition duration-500" />
        ) : (
          <FaGoogle />
        )}
      </button>
      <button
        onMouseEnter={handleFacebookMouseEnter}
        onMouseLeave={handleFacebookMouseLeave}>
        {facebookHovered ? (
          <img
            src={facebookpng}
            className="w-6 hover:scale-[2] transition duration-500"></img>
        ) : (
          <FaFacebook onClick={handleFacebookSignIn} />
        )}
      </button>

      <FaGithub
        onClick={handleGithubSignIn}
        className=" hover:scale-150 text-center cursor-pointer transition duration-300"
      />
    </div>
  );
};

export default SocialLogin;
