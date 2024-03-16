import { useEffect, useState } from "react";
import { MdOutlineFileUpload } from "react-icons/md";
import PropTypes from "prop-types";
import cloudinary from "cloudinary-core"; // Import cloudinary library

const CloudinaryModal = ({ handleImageInfo, setOpenCloudinary }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const uwScript = document.getElementById("uw");

    if (typeof window !== "undefined" && !loaded && !uwScript) {
      const script = document.createElement("script");
      script.async = "";
      script.id = "uw";
      script.src = "https://widget.cloudinary.com/v2.0/global/all.js";
      script.onload = () => setLoaded(true);
      document.body.appendChild(script);
    }
  }, [loaded]);

  const processResults = async (error, result) => {
    if (error) {
      console.log("error", error);
    }
    if (result && result.event === "success") {
      const attachmentURL = await getImageAttachment(result.info.public_id);
      handleImageInfo(attachmentURL);
    }
  };

  const uploadWidget = () => {
    window.cloudinary.openUploadWidget(
      {
        cloudName: "dwdxdtvez",
        uploadPreset: "test_preset",
        sources: ["local", "url", "google_drive"],
      },
      processResults
    );
  };

  return (
    <div>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              <div onClick={uploadWidget}>
                <button
                  id="upload_widget"
                  className="inline-flex items-center gap-1 rounded-md border border-input rounded-r-none bg-white text-red-600 text-sm p-1 file:border-0 file:bg-blue-600 file:text-white file:text-sm">
                  <MdOutlineFileUpload className="text-xl" />{" "}
                  <span className="hover:font-bold duration-500">
                    Upload Your Image
                  </span>
                </button>
              </div>
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

CloudinaryModal.propTypes = {
  handleImageInfo: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
};

export default CloudinaryModal;

// Define getImageAttachment function
export const getImageAttachment = async (id) => {
  const cl = cloudinary.Cloudinary.new({ cloud_name: "dwdxdtvez" }); // Initialize Cloudinary
  return await cl.url(id, { flags: "attachment:imgname" });
};
