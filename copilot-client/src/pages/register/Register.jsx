// Import necessary dependencies
import videoSource from "../../assets/video.mp4";
import Logo from "../../assets/CoPilotXR_02.png";
import { Link } from "react-router-dom";
import { TbUser } from "react-icons/tb";
import { MdLockOutline } from "react-icons/md";
// import { useState } from "react";
import SocialLogin from "../login/SocialLogin";
import LoginButton from "../login/LoginButton";
import { MdOutlineEmail } from "react-icons/md";

const Register = () => {
  
  return (
    <div className="relative">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full object-cover h-full lg:h-screen">
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 h-full lg:h-screen"></div>

      {/* Login card */}
      <div className="lg:absolute h-full lg:h-screen inset-0 flex items-center justify-center p-6">
        <div className="relative z-10 flex flex-col items-center w-max lg:w-[460px] mx-auto py-10 border-[2px] backdrop-blur-md backdrop-saturate-200 rounded-3xl ">
          {/* Logo */}
          <Link to="/">
            <img
              src={Logo}
              className="relative z-10 w-24 pb-4 mx-auto"
              alt=""
            />
          </Link>
          {/* Login Title */}
          <h1 className="text-2xl lg:text-3xl pt-8 pb-2">Create new account</h1>
          <p className="text-sm font-extralight text-gray-300 pb-6 w-4/5 lg:w-3/5 text-center">
            Enhance your experience in world of virtual reality
          </p>

          {/* User name */}
          <div className="relative mx-4">
            <span className="absolute top-2 text-xl left-0 pr-4">
              <TbUser />
            </span>
            <input
              id="userInput"
              className="peer border-b-2 lg:w-80 text-sm border-white focus:border-red-600 focus:transition focus:duration-500 py-2 px-6 w-[248px] focus:outline-none bg-transparent"
              placeholder=""
              type="text"
            />
            <label
              htmlFor="userInput"
              className="absolute -top-4 pl-6 pb-2 left-0 bg-transparent text-xs duration-300 peer-placeholder-shown:left-0 peer-focus:pl-6 peer-placeholder-shown:top-[60%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-xs  peer-focus:-top-4 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-white cursor-text">
              Your Name
            </label>
          </div>
          {/* Email input */}
          <div className="relative mx-4 mt-6">
            <span className="absolute top-2 text-xl left-0 pr-4">
              <MdOutlineEmail />
            </span>
            <input
              id="emailInput"
              className="peer border-b-2 lg:w-80 text-sm border-white focus:border-red-600 focus:transition focus:duration-500 py-2 px-6 w-[248px] focus:outline-none bg-transparent"
              placeholder=""
              type="text"
            />
            <label
              htmlFor="emailInput"
              className="absolute -top-4 pl-6 pb-2 left-0 bg-transparent text-xs duration-300 peer-placeholder-shown:left-0 peer-focus:pl-6 peer-placeholder-shown:top-[60%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-xs  peer-focus:-top-4 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-white cursor-text">
              Email
            </label>
          </div>

          {/* Password input */}
          <div className="relative my-6 ">
            <span className="absolute top-2 text-xl left-0 pr-4">
              <MdLockOutline />
            </span>
            <input
              id="passwordInput"
              className="peer border-b-2 lg:w-80 text-sm border-white focus:border-red-600 focus:transition focus:duration-500 py-2 w-[248px] px-6 focus:outline-none bg-transparent "
              placeholder=""
              type="password"
            />
            <label
              htmlFor="passwordInput"
              className="absolute -top-4 pl-6 pb-2 left-0 bg-transparent text-xs duration-300 peer-placeholder-shown:left-0 peer-focus:pl-6 peer-placeholder-shown:top-[60%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-xs  peer-focus:-top-4 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-white cursor-text">
              Password
            </label>
          </div>

          {/* Image input */}
          <div className="relative w-[252px] lg:w-[320px]">
            <input type="file" className="text-sm" />
          </div>

          {/* Submit button */}
          <LoginButton buttonText="Register" />

          {/* Login with text */}
          <div className="flex items-center pt-4 space-x-2">
            <div className="flex-1 h-px w-14 lg:w-32 bg-white"></div>
            <p className="text-sm ">Login with social accounts</p>
            <div className="flex-1 h-px bg-white"></div>
          </div>

          {/* Social icons */}
          <SocialLogin />

          {/* Sign up text */}
          <p className="text-sm text-center pt-6 gap-2 flex justify-center sm:px-6 ">
            Already has an account?
            <Link
              to="/login"
              className="underline hover:text-red-600 font-bold">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
