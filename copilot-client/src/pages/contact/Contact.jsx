import Lottie from "lottie-react";
import loadingAnimation from "../../assets/animatecoding.json";

const Contact = () => {
  return (
    <div className="flex justify-center flex-col items-center h-screen">
      <p className="font-neuzeit text-xl text-center p-4 lg:p-0">
        Page is under maintenance. Please see the other pages
      </p>
      <Lottie
        animationData={loadingAnimation}
        loop={true}
        className="w-2/3 md:w-1/2 mx-auto"></Lottie>
    </div>
  );
};

export default Contact;
