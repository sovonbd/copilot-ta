import useAuth from "../../../hooks/useAuth";
import { FaXTwitter, FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Profile = () => {
  const { user } = useAuth(); // Corrected to invoke useAuth as a function

  return (
    <div className="h-screen flex justify-center items-start">
      <div className="w-96 mx-auto px-6 py-6  text-center bg-gray-800 rounded-lg lg:mt-0 xl:px-10">
        <div className="space-y-4 xl:space-y-6">
          <img
            className="mx-auto rounded-full h-36 w-36 border-2 p-2"
            src={user?.photoURL}
            alt="author avatar"
          />
          <div className="space-y-2">
            <div className="flex justify-center items-center flex-col space-y-3 text-lg font-medium leading-6">
              <h3 className="text-white">{user?.displayName}</h3>
              <p className="text-white">{user?.email}</p>
              <p className="text-indigo-300">Full Stack Developer</p>
              <div className="flex justify-center mt-5 space-x-5 text-xl">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-white">
                  <span className="sr-only">Twitter</span>
                  <FaXTwitter />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-white">
                  <FaGithub />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-white">
                  <span className="sr-only">Linkedin</span>
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
