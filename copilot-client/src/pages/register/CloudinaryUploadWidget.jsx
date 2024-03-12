import { createContext, useEffect, useState } from "react";
import { MdOutlineFileUpload } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const CloudinaryScriptContext = createContext();

const CloudinaryUploadWidget = ({
  uwConfig,
  setPublicId,
  handleImageInfo,
  setFileName,
}) => {
  const [loaded, setLoaded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (!loaded) {
      const uwScript = document.getElementById("uw");
      if (!uwScript) {
        const script = document.createElement("script");
        script.async = true;
        script.id = "uw";
        script.src = "https://upload-widget.cloudinary.com/global/all.js";
        script.onload = () => setLoaded(true);
        document.body.appendChild(script);
      } else {
        setLoaded(true);
      }
    }
  }, [loaded]);

  const initializeCloudinaryWidget = () => {
    if (loaded) {
      var myWidget = window.cloudinary.createUploadWidget(
        uwConfig,
        (error, result) => {
          if (!error && result && result.event === "success") {
            setPublicId(result.info.public_id);
            handleUploadSuccess(result.info);
            handleImageInfo((prevInfo) => {
              if (!prevInfo) {
                prevInfo = [];
              }
              return [...prevInfo, result.info];
            });
          }
        }
      );

      const uploadButton = document.getElementById("upload_widget");
      const handleClick = () => {
        myWidget.open();
        // Remove event listener after opening the widget once
        uploadButton.removeEventListener("click", handleClick);
      };

      uploadButton.addEventListener("click", handleClick);
    }
  };

  const handleUploadSuccess = (info) => {
    if (location.pathname === "/register") {
      setFileName(info.original_filename + " ..." || "File name not found");
    }
  };

  return (
    <CloudinaryScriptContext.Provider value={{ loaded }}>
      {location.pathname !== "/" ? (
        <button
          id="upload_widget"
          className="inline-flex items-center gap-1 rounded-md border border-input rounded-r-none bg-white text-red-600 text-sm p-1 file:border-0 file:bg-blue-600 file:text-white file:text-sm"
          onClick={initializeCloudinaryWidget}>
          <MdOutlineFileUpload className="text-xl" /> Upload Your Image
        </button>
      ) : (
        <button
          id="upload_widget"
          onClick={initializeCloudinaryWidget}
          className="relative inline-flex items-center justify-center p-4 px-16 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border-[1px] rounded-full shadow-inner shadow-gray-300  group">
          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-gradient-to-tr from-red-900 via-red-800 to-red-500  group-hover:translate-x-0 ease">
            <FaArrowRightLong className="text-2xl" />
          </span>
          <span className="absolute font-semibold flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
            Upload Photo
          </span>
          <span className="relative invisible">Button Text</span>
        </button>
      )}
    </CloudinaryScriptContext.Provider>
  );
};

export default CloudinaryUploadWidget;
export { CloudinaryScriptContext };
