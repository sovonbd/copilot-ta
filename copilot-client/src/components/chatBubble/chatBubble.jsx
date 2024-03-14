import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { PiChatsCircleFill } from "react-icons/pi";
import { PiChatsFill, PiX } from "react-icons/pi";

const ChatBubble = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const toggleChatBubble = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., sending the form data to a backend server
    console.log(formData);
    // Reset form fields after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="fixed bottom-0 right-0 m-8">
      <button
        onClick={toggleChatBubble}
        className="text-2xl bg-red-600 rounded-full p-4 hover:scale-110 duration-300 ease-in-out transition-all mb-2">
        {/* <PiChatsFill className="" /> */}
        {isOpen ? <PiX className="" /> : <PiChatsFill />}
      </button>

      {isOpen && (
        <div className="chat-bubble bg-red-500 w-80">
          <div className="text-center  pt-2 pb-6 bg-white -mx-4 -mt-2 rounded-t-lg text-red-500">
            <PiChatsCircleFill className="w-20 mx-auto text-5xl" />

            <h1 className="text-2xl font-bold ">How can we help you?</h1>
            <p className="text-sm ">Send a message to our support team.</p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-y-5  py-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Name"
              onChange={handleInputChange}
              className="p-2 text-black rounded-md placeholder:px-2 h-10 bg-white"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Email"
              onChange={handleInputChange}
              className="p-2 text-black rounded-md placeholder:px-2 h-10 bg-white"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              placeholder="Phone"
              onChange={handleInputChange}
              className="p-2 text-black rounded-md placeholder:px-2 h-10 bg-white"
            />
            <textarea
              name="message"
              value={formData.message}
              placeholder="Message"
              onChange={handleInputChange}
              className="p-2 text-black rounded-md placeholder:px-2 h-20 bg-white"></textarea>

            <button className="relative bg-white inline-flex border-red-500 items-center justify-center px-14 py-2 overflow-hidden font-medium text-white transition duration-300 ease-out border-[1px] rounded-md shadow-inner shadow-red-500 group">
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-gradient-to-tr from-red-900 via-red-800 to-red-500  group-hover:translate-x-0 ease">
                <FaArrowRightLong className="text-2xl" />
              </span>
              <span className="absolute font-semibold flex text-red-600 items-center justify-center w-full h-full white transition-all duration-300 transform group-hover:translate-x-full ease">
                Send
              </span>
              <span className="relative invisible">Button Text</span>
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBubble;
