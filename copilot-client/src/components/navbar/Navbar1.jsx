import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

const Navbar1 = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div className="scale-100 cursor-pointer rounded-2xl py-2 text-xl font-semibold  transition-all duration-200 hover:scale-110">
          <h2>Logo</h2>
        </div>
        <NavDesktop />
        <NavMobile />
      </div>
    </div>
  );
};

export default Navbar1;
