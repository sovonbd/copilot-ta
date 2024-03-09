import React from "react";
import videoSource from "../../assets/video.mp4";
import Logo from "../../assets/CoPilotXR_02.png";
import { Link } from "react-router-dom";
import { TbUser } from "react-icons/tb";
import { MdLockOutline } from "react-icons/md";

const Login = () => {
  return (
    <div className="relative">
      <Link to="/">
        <img
          src={Logo}
          className="relative z-10 w-40 lg:w-60 py-10 mx-auto"
          alt=""
        />
      </Link>
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full object-cover h-screen">
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-60 h-screen"></div>

      {/* Login card */}
      <div className="lg:absolute h-screen inset-0 flex items-center justify-center">
        <div className="relative z-10 flex flex-col items-center w-max lg:w-[460px] mx-auto py-10 border-2 backdrop-blur-md backdrop-saturate-200 rounded-3xl">
          <h1 className="text-3xl font-semibold text-white mb-8">Login</h1>

          {/* Email input */}
          <div className="relative mx-4">
            <span className="absolute top-2 text-xl left-0 pr-4">
              <TbUser />
            </span>
            <input
              className="peer border-b-2 lg:w-80 text-sm border-white focus:border-red-600 focus:transition focus:duration-500 py-2 px-6 focus:outline-none bg-transparent "
              placeholder=""
              type="text"
            />
            <label
              className="absolute -top-4 pl-6 pb-2 left-0 bg-transparent text-xs duration-300 peer-placeholder-shown:left-0 peer-focus:pl-6 peer-placeholder-shown:top-[60%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-xs  peer-focus:-top-4 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-white"
              htmlFor="">
              Email
            </label>
          </div>

          {/* Password input */}
          <div className="relative my-8 ">
            <span className="absolute top-2 text-xl left-0 pr-4">
              <MdLockOutline />
            </span>
            <input
              className="peer border-b-2 lg:w-80 text-sm border-white focus:border-red-600 focus:transition focus:duration-500 py-2 px-6 focus:outline-none bg-transparent "
              placeholder=""
              type="password"
            />
            <label
              className="absolute -top-4 pl-6 pb-2 left-0 bg-transparent text-xs duration-300 peer-placeholder-shown:left-0 peer-focus:pl-6 peer-placeholder-shown:top-[60%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-xs  peer-focus:-top-4 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-white"
              htmlFor="">
              Password
            </label>
          </div>

          {/* Remember & Forgot Password option */}
          

          {/* Submit button */}
          <button
            type="button"
            className="py-2 px-5 mb-4 mt-6 shadow-lg before:block before:-left-1 before:-top-1 before:bg-white before:absolute before:h-0 before:w-0 before:hover:w-[100%] before:hover:h-[100%]  before:duration-500 before:-z-40 after:block after:-right-1 after:-bottom-1 after:bg-white after:absolute after:h-0 after:w-0 after:hover:w-[100%] after:hover:h-[100%] after:duration-500 after:-z-40 bg-white relative inline-block text-black hover:text-white hover:bg-red-700 lg:w-[320px]">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
