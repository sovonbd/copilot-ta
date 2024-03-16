import { useForm } from "react-hook-form";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiX } from "react-icons/fi"; // Importing close icon from react-icons/fi
import LoginButton from "../../pages/login/LoginButton";
import { TbUser } from "react-icons/tb";
import CloudinaryUploadWidget from "../../pages/register/CloudinaryUploadWidget";
import { useState } from "react";
import CloudinaryModal from "./CloudinaryModal";

const Modal = ({ setOpenModal }) => {
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      {/* <button hidden onClick={() => setOpenModal}></button> */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
