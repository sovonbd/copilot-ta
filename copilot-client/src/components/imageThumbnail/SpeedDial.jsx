import { BsThreeDotsVertical } from "react-icons/bs";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import cloudinary from "cloudinary-core";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { FaPhotoVideo } from "react-icons/fa";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SpeedDial = ({ itemId, refetchImages }) => {
  const svgs = [
    {
      name: "Update Photo",
      icon: FaPhotoVideo,
    },
  ];

  const [cloudinaryInfo, setCloudinaryInfo] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const axiosPublic = useAxiosPublic();

  const { mutate } = useMutation({
    mutationFn: async (item) => {
      const res = await axiosPublic.patch(`/images/${cloudinaryInfo.id}`, item);
      if (res.data.modifiedCount > 0) {
        toast.success("Image Updated Successfully!!!");
        refetchImages();
      }
      return res.data;
    },
  });

  useEffect(() => {
    if (cloudinaryInfo) {
      // console.log(cloudinaryInfo);
      mutate(cloudinaryInfo);
    }
  }, [cloudinaryInfo, mutate]);

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

  const processResults = async (id, error, result) => {
    if (error) {
      console.log("error", error);
    }
    if (result && result.event === "success") {
      const attachmentURL = await getImageAttachment(result.info.public_id);
      setCloudinaryInfo({ id, attachmentURL }); // Setting id along with attachmentURL
      // console.log("ID:", id); // Logging the id
    }
  };

  const uploadWidget = (id) => {
    // Accepting id as parameter
    window.cloudinary.openUploadWidget(
      {
        cloudName: "dwdxdtvez",
        uploadPreset: "test_preset",
        sources: ["local", "url", "google_drive"],
        multiple: false,
      },
      (error, result) => processResults(id, error, result) // Passing id to processResults
    );
  };

  const handleOnclick = (id) => {
    uploadWidget(id); // Passing id to uploadWidget
    // console.log(id);
  };

  return (
    <div>
      <div className="inline-block rotate-180">
        <div className="group flex flex-col items-center  justify-center w-max mx-auto absolute top-0 left-[50%] -translate-x-1/2">
          {/* + icon  */}
          <div className="flex justify-center w-8 h-8  rounded-full items-center group-hover:rotate-90 hover:bg-red-500/80 duration-500">
            <BsThreeDotsVertical className="" />
          </div>
          {/* icon container  */}
          <div className="space-y-4 duration-500 h-0 group-hover:my-4 group-hover:h-full ">
            {/* Icon Map */}
            {svgs?.map((item, idx) => (
              <div
                key={idx}
                className={`rotate-180 rounded-full scale-0 group-hover:scale-100 duration-300 opacity-0 group-hover:opacity-100 ${
                  idx === 0
                    ? "delay-[400ms] group-hover:delay-100"
                    : idx === 1
                    ? "delay-300 group-hover:delay-200"
                    : "delay-[400ms] group-hover:delay-100"
                }`}>
                <div
                  className="w-full h-full flex hover:scale-150 transition ease-in-out justify-center items-center rounded-full duration-300 tooltip tooltip-left"
                  data-tip={item.name} // Assuming item has a name property for tooltip
                >
                  <item.icon onClick={() => handleOnclick(itemId, item.name)} />{" "}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SpeedDial;

export const getImageAttachment = async (id) => {
  const cl = cloudinary.Cloudinary.new({ cloud_name: "dwdxdtvez" }); // Initialize Cloudinary
  return await cl.url(id, { flags: "attachment:imgname" });
};
