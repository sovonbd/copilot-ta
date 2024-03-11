// UploadButton.jsx
import { useState } from "react";
import CloudinaryUploadWidget from "./CloudinaryUploadWidget";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, responsive, placeholder } from "@cloudinary/react";

const UploadButton = ({ handleImageInfo }) => {
  const [publicId, setPublicId] = useState("");
  const [cloudName] = useState("dwdxdtvez");
  const [uploadPreset] = useState("pc1pj4gw");
  const [fileName, setFileName] = useState("");

  const [uwConfig] = useState({
    cloudName,
    uploadPreset,
    // cropping: true, //add a cropping step
    // showAdvancedOptions: true,  //add advanced options (public_id and tag)
    sources: ["local", "url", "google_drive"], // restrict the upload sources to URL and local files
    multiple: true, //restrict upload to a single file
    // folder: "user_images", //upload files to the specified folder
    // tags: ["users", "profile"], //add the given tags to the uploaded files
    // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
    // clientAllowedFormats: ["images"], //restrict uploading to image files only
    // maxImageFileSize: 2000000,  //restrict file size to less than 2MB
    // maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
    theme: "", //change to a purple theme
  });

  // Create a Cloudinary instance and set your cloud name.
  // const cld = new Cloudinary({
  //   cloud: {
  //     cloudName,
  //   },
  // });

  // const myImage = cld.image(publicId);

  return (
    <div>
      <CloudinaryUploadWidget
        uwConfig={uwConfig}
        setPublicId={setPublicId}
        handleImageInfo={handleImageInfo}
        setFileName={setFileName} // Pass setFileName to CloudinaryUploadWidget
      />
      {fileName && (
        <span className="pl-1 text-sm relative -top-1">{fileName}</span>
      )}
      {/* <div style={{ width: "800px" }}>
        <AdvancedImage
          style={{ maxWidth: "100%" }}
          cldImg={myImage}
          plugins={[responsive(), placeholder()]}
        />
      </div> */}
    </div>
  );
};

export default UploadButton;
