import { GiHamburgerMenu, GiShoppingBag } from "react-icons/gi";
import { AiOutlineUser } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="flex justify-between m-5 align-center">
      <div className="flex w-20 justify-between">
        <AiOutlineUser size="2em" className="cursor-pointer" />
        <GiShoppingBag size="2em" className="cursor-pointer" />
      </div>
      <div>
        <GiHamburgerMenu size="2em" className="cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
