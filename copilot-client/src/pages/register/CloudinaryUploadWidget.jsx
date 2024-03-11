// CloudinaryUploadWidget.jsx
import { createContext, useEffect, useState } from "react";
import { MdOutlineFileUpload } from "react-icons/md";

const CloudinaryScriptContext = createContext();

const CloudinaryUploadWidget = ({
  uwConfig,
  setPublicId,
  handleImageInfo,
  setFileName,
}) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded) {
      const uwScript = document.getElementById("uw");
      if (!uwScript) {
        const script = document.createElement("script");
        script.async = true;
        script.id = "uw";
        script.src = "https://upload-widget.cloudinary.com/global/all.js";
        script.onload = () => setLoaded(true); // Set loaded state when script is loaded
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

      document.getElementById("upload_widget").addEventListener(
        "click",
        function () {
          myWidget.open();
        },
        false
      );
    }
  };

  const handleUploadSuccess = (info) => {
    setFileName(info.original_filename || "File name not found");
  };

  return (
    <CloudinaryScriptContext.Provider value={{ loaded }}>
      <button
        id="upload_widget"
        className="inline-flex items-center gap-1 rounded-md border border-input rounded-r-none bg-white text-red-600 text-sm p-1 file:border-0 file:bg-blue-600 file:text-white file:text-sm"
        onClick={initializeCloudinaryWidget}>
        <MdOutlineFileUpload className="text-xl" /> Upload Your Image
      </button>
    </CloudinaryScriptContext.Provider>
  );
};

export default CloudinaryUploadWidget;
export { CloudinaryScriptContext };
