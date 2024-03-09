import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import facebookpng from "../../assets/facebook-96.png";

const SocialLogin = () => {
  // const { googleSignIn } = useAuth();
  // const navigate = useNavigate();
  // const location = useLocation();
  // const axiosPublic = useAxiosPublic();
  // const from = location.state?.from?.pathname || "/";
  // const handleGoogleSignIn = () => {
  //   googleSignIn()
  //     .then((res) => {
  //       // console.log(res.user);
  //       const userInfo = {
  //         email: res.user?.email,
  //         name: res.user?.displayName,
  //         image: res.user?.photoURL,
  //         phoneNumber: res.user?.phoneNumber || "N/A",
  //       };
  //       // console.log(userInfo);
  //       axiosPublic.post("/users", userInfo).then((res) => {
  //         // console.log(res.data);
  //       });
  //       Swal.fire({
  //         position: "center",
  //         icon: "success",
  //         title: "Welcome back to Edumart !!!",
  //         showConfirmButton: false,
  //         timer: 2000,
  //       });
  //       navigate(from, { replace: true });
  //     })
  //     .catch((err) => console.log(err));
  // };

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
        // onClick={handleGoogleSignIn}
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
          <FaFacebook />
        )}
      </button>
      {/* <FaFacebook
        // onClick={handleGoogleSignIn}
        className="hover:text-sky-500 cursor-pointer"
      /> */}
      <FaGithub
        // onClick={handleGoogleSignIn}
        className=" hover:scale-150 text-center cursor-pointer transition duration-300"
      />
    </div>
  );
};

export default SocialLogin;
