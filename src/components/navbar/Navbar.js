import { GiHamburgerMenu, GiShoppingBag } from "react-icons/gi";
import { AiOutlineUser } from "react-icons/ai";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const context = useAuth();
  const { currentUser } = context;

  const renderUserIcon = () => {
    if (currentUser) {
      const {
        _delegate: { photoURL },
      } = currentUser;

      return (
        <div className="flex w-100 justify-between align-center">
          <img
            src={photoURL}
            alt="profile icon"
            className="rounded-full w-[3em]"
          />
        </div>
      );
    }
    if (!currentUser) {
      return (
        <div className="flex w-100 justify-between align-center">
          <AiOutlineUser size="2em" className="cursor-pointer" />
        </div>
      );
    }
  };

  const renderMenu = () => (
    <div>
      <GiHamburgerMenu size="2em" className="cursor-pointer" />
    </div>
  );

  return (
    <nav className="flex justify-between m-5 align-center">
      {renderUserIcon()}
      {renderMenu()}
    </nav>
  );
};

export default Navbar;
