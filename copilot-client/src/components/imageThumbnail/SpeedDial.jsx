import { BsThreeDotsVertical } from "react-icons/bs";
import { MdDriveFileRenameOutline } from "react-icons/md";

import { FaPhotoVideo } from "react-icons/fa";
import CloudinaryUploadWidget from "../../pages/register/CloudinaryUploadWidget";
import Modal from "./Modal";
import { useState } from "react";
import CloudinaryModal from "./CloudinaryModal";

const SpeedDial = ({ itemId }) => {
  const svgs = [
    {
      name: "Update Name",
      icon: MdDriveFileRenameOutline,
    },
    {
      name: "Update Photo",
      icon: FaPhotoVideo,
    },
  ];

  const openModal = () => {
    document.getElementById("my_modal_1").showModal();
  };

  const openCloudinary = () => {
    document.getElementById("my_modal_2").showModal();
  };

  const handleOnclick = (id, name) => {
    if (name === "Update Name") {
      openModal(); // Call the openModal function when "Update Name" is clicked
    } else {
      openCloudinary();
    }
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
      <Modal setOpenModal={() => openModal} />
      <CloudinaryModal setOpenCloudinary={() => openCloudinary} />
    </div>
  );
};
export default SpeedDial;
