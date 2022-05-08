import React, { useState } from "react";

import Logo from "../logo/Logo";
import Nav from "../../styles/Navbar/Nav";
import NavItem from "../../styles/Navbar/NavItem";

import { BsBookmarkHeart } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineX } from "react-icons/hi";
import { AiOutlineLogout } from "react-icons/ai";


const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const renderMenuButton = () => (
    <div className="block lg:hidden">
      <button
        onClick={toggleExpand}
        className="flex items-center px-3 py-2 border rounded text-white border-white border-dotted hover:border-solid"
      >
        {isExpanded ? (
          <HiOutlineX
            size="1rem"
            color="white"
            onClick={toggleExpand}
            className="icon"
          />
        ) : (
          <svg
            className="fill-current h-4 w-4 icon"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        )}
      </button>
    </div>
  );

  const renderIcons = () => (
    <div className="flex lg:order-3">
      <button className="mx-2 lg:mx-8">
        <BsBookmarkHeart size="1.5rem" color="white" className="icon" />
      </button>
      <button className="mr-2 lg:mr-2">
        <FaRegUser size="1.5rem" color="white" className="icon" />
      </button>
    </div>
  );

  const renderNav = () => (
    <div
      className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto lg:ml-10 lg:text-xl transition-all ${
        isExpanded ? "w-3/4 h-screen z-10 transition" : "hidden "
      }`}
    >
      <Nav isExpanded>
        <ul className={"lg:pt-0 transition mt-5 lg:mt-0"}>
          <NavItem link="/">Home</NavItem>
          <NavItem link="/recipies">Recipies</NavItem>
          <NavItem link="/chefs">Chefs</NavItem>
          <NavItem link="/our-mission">Our Mission</NavItem>
          <NavItem link="">
            <AiOutlineLogout size="1.6rem" alt="logout" />
          </NavItem>
        </ul>
      </Nav>
    </div>
  );

  return (
    <header className="flex items-center justify-between flex-wrap bg-zinc-800 p-6">
      {renderMenuButton()}
      <Logo />
      {renderIcons()}
      {renderNav()}
    </header>
  );
};

export default Navbar;
