import { FaArrowRightLong } from "react-icons/fa6";

const Subscription = () => {
  return (
    <div className="flex min-h-screen pt-[30px] px-2 lg:px-10 w-11/12 mx-auto">
      <div className="min-w-full">
        <p className="text-white text-[20px] leading-[40px] font-semibold">
          Your Subscription
        </p>

        <div>
          <p className="text-[#717F87] text-[15px] leading-[27px] font-medium">
            Your monthly subscription,{" "}
            <span className="text-red-500">Fast Start</span>, provides a quick
            and efficient beginning to your journey.
          </p>
        </div>

        <div className="mt-[20px] grid md:grid-cols-3 gap-8 ">
          <div
            key="1"
            className="bg-[#fff] rounded-[10px] hover:scale-105 transition-all duration-500 ease-in-out hover:shadow-md hover:shadow-white  divide-y">
            <div className="pt-[15px] px-[25px] pb-[25px]">
              <div className="flex justify-end">
                <div className="bg-red-200 rounded-[20px] flex justify-center align-center px-[12px]">
                  <p className="text-[#00153B] text-[12px] leading-[28px] font-bold">
                    Starter
                  </p>
                </div>
              </div>

              <div>
                <p className="text-[#00153B] text-[19px] leading-[24px] font-bold">
                  Trial
                </p>
                <p className="text-[#00153B] text-[50px] leading-[63px] font-bold">
                  Free
                </p>
              </div>

              <div>
                <p className="text-[#717F87] text-[18px] leading-[28px] font-medium">
                  5 Credits
                </p>
                <p className="text-[#717F87] text-[18px] leading-[28px] font-medium">
                  1 User
                </p>
              </div>
            </div>

            <div className="pt-[25px] px-[25px] pb-[35px]">
              <div>
                <p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
                  Direct Phone Numbers
                </p>
                <p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
                  Landline Phone Numbers
                </p>
                <p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
                  Corporate email addresses
                </p>
                <p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
                  Propsetcs
                </p>
                <p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
                  Chrome Extension
                </p>
              </div>

              <div className="mt-[25px]">
                <button className="relative inline-flex border-red-500 items-center justify-center p-4 w-full py-2 overflow-hidden font-medium text-white transition duration-300 ease-out border-[1px] rounded-md shadow-inner shadow-gray-300  group">
                  <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-gradient-to-tr from-red-900 via-red-800 to-red-500  group-hover:translate-x-0 ease">
                    <FaArrowRightLong className="text-2xl" />
                  </span>
                  <span className="absolute font-semibold flex items-center justify-center w-full h-full text-red-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                    Downgrade +
                  </span>
                  <span className="relative invisible">Button Text</span>
                </button>
              </div>
            </div>
          </div>

          <div
            key="2"
            className=" bg-[#fff] rounded-[10px] hover:scale-105 transition-all duration-500 ease-in-out hover:shadow-md hover:shadow-white  divide-y">
            <div className="pt-[15px] px-[25px] pb-[25px]">
              <div className="flex justify-end">
                <div className="bg-red-200 rounded-[20px] flex justify-center align-center px-[12px]">
                  <p className="text-[#00153B] text-[12px] leading-[28px] font-bold">
                    Value
                  </p>
                </div>
              </div>

              <div>
                <p className="text-[#00153B] text-[19px] leading-[24px] font-bold">
                  Fast Start
                </p>
                <p className="text-[#00153B] text-[50px] leading-[63px] font-bold">
                  $49
                </p>
              </div>

              <div>
                <p className="text-[#717F87] text-[18px] leading-[28px] font-medium">
                  50 Credits per month
                </p>
                <p className="text-[#717F87] text-[18px] leading-[28px] font-medium">
                  Unlimited users
                </p>
              </div>
            </div>

            <div className="pt-[25px] px-[25px] pb-[35px]">
              <div>
                <p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
                  Direct Phone Numbers
                </p>
                <p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
                  Landline Phone Numbers
                </p>
                <p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
                  Corporate email addresses
                </p>
                <p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
                  Propsetcs
                </p>
                <p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
                  Chrome Extension
                </p>
              </div>

              <div className="mt-[25px]">
                <button className="bg-[#E1E3E5] rounded-[5px] py-[15px] px-[25px] text-[#fff] text-[14px] leading-[17px] font-semibold w-full">
                  Current Plan
                </button>
              </div>
            </div>
          </div>

          <div
            key="3"
            className=" bg-[#fff] rounded-[10px] hover:scale-105 transition-all duration-500 ease-in-out hover:shadow-md hover:shadow-white  divide-y">
            <div className="pt-[15px] px-[25px] pb-[25px]">
              <div className="flex justify-end">
                <div className="bg-red-200 rounded-[20px] flex justify-center align-center px-[12px]">
                  <p className="text-[#00153B] text-[12px] leading-[28px] font-bold">
                    Pro
                  </p>
                </div>
              </div>

              <div>
                <p className="text-[#00153B] text-[19px] leading-[24px] font-bold">
                  Accelerate
                </p>
                <p className="text-[#00153B] text-[50px] leading-[63px] font-bold">
                  $89
                </p>
              </div>

              <div>
                <p className="text-[#717F87] text-[18px] leading-[28px] font-medium">
                  100 Credits per month
                </p>
                <p className="text-[#717F87] text-[18px] leading-[28px] font-medium">
                  Unlimited users
                </p>
              </div>
            </div>

            <div className="pt-[25px] px-[25px] pb-[35px]">
              <div>
                <p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
                  Direct Phone Numbers
                </p>
                <p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
                  Landline Phone Numbers
                </p>
                <p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
                  Corporate email addresses
                </p>
                <p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
                  Propsetcs
                </p>
                <p className="text-[#717F87] text-[14px] leading-[24px] font-medium">
                  Chrome Extension
                </p>
              </div>

              <div className="mt-[25px]">
                <button
                  id="upload_widget"
                  className="relative inline-flex border-red-500 items-center justify-center p-4 w-full py-2 overflow-hidden font-medium text-white transition duration-300 ease-out border-[1px] rounded-md shadow-inner shadow-gray-300  group">
                  <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-gradient-to-tr from-red-900 via-red-800 to-red-500  group-hover:translate-x-0 ease">
                    <FaArrowRightLong className="text-2xl" />
                  </span>
                  <span className="absolute font-semibold flex items-center justify-center w-full h-full text-red-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                    Upgrade +
                  </span>
                  <span className="relative invisible">Button Text</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
