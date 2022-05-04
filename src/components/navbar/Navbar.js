// import { GiHamburgerMenu } from "react-icons/gi";
// import { AiOutlineUser } from "react-icons/ai";
// import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
import { BsBookmarkHeart } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { SiFoodpanda } from "react-icons/si"

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  // const context = useAuth();
  // const { currentUser } = context;

  // const renderUserIcon = () => {
  //   if (currentUser) {
  //     const {
  //       _delegate: { photoURL },
  //     } = currentUser;

  //     return (
  //       <div className="flex w-100 justify-between align-center">
  //         <img
  //           src={photoURL}
  //           alt="profile icon"
  //           className="rounded-full w-[2em]"
  //         />
  //       </div>
  //     );
  //   }
  //   if (!currentUser) {
  //     return (
  //       <div className="flex w-100 justify-between align-center">
  //         <AiOutlineUser size="2em" className="cursor-pointer" />
  //       </div>
  //     );
  //   }
  // };

  // const renderMenu = () => (
  //   <div>
  //     <GiHamburgerMenu size="2em" className="cursor-pointer" />
  //   </div>
  // );

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
      <div className="block lg:hidden">
        {isExpanded ? (
          <button className="flex items-center px-3 py-2 rounded hover:scale-125 transition">
            <FiX color="white" size="1.5rem" />
          </button>
        ) : (
          <button class="flex items-center px-3 py-2 border rounded text-white border-white border-dotted hover:border-solid">
            <svg
              class="fill-current h-4 w-4"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        )}
      </div>

      <div className="flex items-center justify-center text-white mr-6">
        {/* <svg
          class="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        </svg> */}
        <SiFoodpanda size="2rem" color="white" className="mr-1 skew-x-12"/>
        <span class="font-semibold text-xl tracking-tight">RecipiePanda</span>
      </div>

      <div className="flex lg:hidden">
        <button className="mx-2">
          <BsBookmarkHeart
            size="1.5rem"
            color="white"
            className="hover:scale-125 transition"
          />
        </button>
        <button className="ml-2">
          <FaRegUser
            size="1.5rem"
            color="white"
            className="hover:scale-125 transition"
          />
        </button>
      </div>

      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm hidden lg:flex-grow lg:block">
          <ul>
            <a href="#">
              <li className="list-style-none lg: mr-4 mt-4 lg:inline-block lg:mt-0 text-white text-right cursor-pointer">
                Home
              </li>
            </a>
            <a href="#">
              <li className="list-style-none lg: mr-4 mt-2 lg:inline-block lg:mt-0 text-white text-right cursor-pointer">
                About
              </li>
            </a>
            <a href="#">
              <li className="list-style-none lg: mr-4 mt-2 lg:inline-block lg:mt-0 text-white text-right cursor-pointer">
                Bookmarks
              </li>
            </a>
            <a href="#">
              <li className="list-style-none lg: mr-4 mt-2 lg:inline-block lg:mt-0 text-white text-right cursor-pointer">
                Logout
              </li>
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
