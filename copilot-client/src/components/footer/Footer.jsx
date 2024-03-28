import { useState } from "react";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegEnvelope,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div>
      <footer
        className="bg-transparent 
      ">
        <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <div className="flex justify-center text-white sm:justify-start">
                <Link
                  to="/"
                  className="relative text-2xl font-bold pb-4 hover:scale-110 transition duration-300">
                  Virtual <span className="text-red-600">Reality</span>
                </Link>{" "}
              </div>

              <p className="mt-6 max-w-md text-center leading-relaxed text-white sm:max-w-xs sm:text-left">
                An innovative tech-driven production studio with a focus on XR
                virtual .
              </p>

              <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
                <li>
                  <Link href="/" rel="noreferrer" target="_blank">
                    <span className="sr-only">Facebook</span>
                    <FaFacebook className="text-white hover:text-blue-600 cursor-pointer text-2xl"></FaFacebook>
                  </Link>
                </li>

                <li>
                  <Link href="/" rel="noreferrer" target="_blank">
                    <span className="sr-only">Instagram</span>
                    <FaInstagram className="text-white hover:text-pink-600 text-center cursor-pointer text-2xl"></FaInstagram>
                  </Link>
                </li>

                <li>
                  <Link href="/" rel="noreferrer" target="_blank">
                    <span className="sr-only">Twitter</span>
                    <FaXTwitter className="text-white cursor-pointer text-2xl"></FaXTwitter>
                  </Link>
                </li>

                <li>
                  <Link href="/" rel="noreferrer" target="_blank">
                    <span className="sr-only">GitHub</span>
                    <FaGithub className="text-white hover:text-black text-center cursor-pointer text-2xl"></FaGithub>
                  </Link>
                </li>

                <li>
                  <Link href="/" rel="noreferrer" target="_blank">
                    <span className="sr-only">Google</span>
                    <button
                      className="text-white text-2xl"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}>
                      {isHovered ? <FcGoogle /> : <FaGoogle />}
                    </button>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-white">About Us</p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <a
                      className="text-white transition hover:text-white/75"
                      href="/">
                      Company History
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-white/75"
                      href="/">
                      Meet the Team
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-white/75"
                      href="/">
                      Employee Handbook
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-white/75"
                      href="/">
                      Careers
                    </a>
                  </li>
                </ul>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-white">Our Services</p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <a
                      className="text-white transition hover:text-white/75"
                      href="/">
                      Affiliate
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-white/75"
                      href="/">
                      Investors
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-white/75"
                      href="/">
                      Marketing
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-white/75"
                      href="/">
                      Google Ads
                    </a>
                  </li>
                </ul>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-white">Helpful Links</p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <a
                      className="text-white transition hover:text-white/75"
                      href="/">
                      FAQs
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-white/75"
                      href="/">
                      Support
                    </a>
                  </li>

                  <li>
                    <a
                      className="group flex justify-center gap-1.5 sm:justify-start rtl:sm:justify-end"
                      href="/">
                      <span className="text-white transition group-hover:text-white/75">
                        Live Chat
                      </span>

                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500"></span>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-white">Contact Us</p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <a
                      className="flex items-center justify-center gap-1.5 sm:justify-start "
                      href="/">
                      <FaRegEnvelope className="text-lg"></FaRegEnvelope>

                      <span className=" text-white">virtual@reality.com</span>
                    </a>
                  </li>

                  <li>
                    <a
                      className="flex items-center justify-center gap-1.5 sm:justify-start "
                      href="/">
                      <FaPhoneAlt className="text-lg" />

                      <span className=" text-white">0123456789</span>
                    </a>
                  </li>

                  <li className="flex items-start justify-center gap-1.5 sm:justify-start">
                    <FaMapMarkerAlt className="text-lg" />

                    <address className="-mt-0.5  not-italic text-white">
                      Winnipeg, Manitoba, Canada
                    </address>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-100 py-6">
            <div className="text-center sm:flex sm:justify-between sm:text-left">
              <p className="text-sm text-white space-x-2">
                <span className="block sm:inline">All rights reserved.</span>

                <a
                  className="inline-block text-red-500 underline transition hover:text-teal-600/75"
                  href="/">
                  Terms & Conditions
                </a>

                <span>&middot;</span>

                <a
                  className="inline-block text-red-500 underline transition hover:text-teal-600/75"
                  href="/">
                  Privacy Policy
                </a>
              </p>

              <p className="mt-4 text-sm text-white sm:order-first sm:mt-0">
                &copy;{` ${new Date().getFullYear()} Virtual Reality Co.`}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
