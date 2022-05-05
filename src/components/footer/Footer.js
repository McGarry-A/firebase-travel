import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import Logo from "../logo/Logo";

const Footer = () => {
  const FooterContainer = ({ children }) => (
    <div className="flex items-center justify-between bg-gray-800 p-6 fixed bottom-0 w-full">
      {children}
    </div>
  );

  const renderSocialIcons = () => (
    <div className="flex justify-around">
      <FaFacebookF
        color="white"
        size="1.5rem"
        className="cursor-pointer transition hover:scale-125 mx-2"
      />
      <FaInstagram
        color="white"
        size="1.5rem"
        className="cursor-pointer transition hover:scale-125 mx-2"
      />
      <BsTwitter
        color="white"
        size="1.5rem"
        className="cursor-pointer transition hover:scale-125 mx-2"
      />
    </div>
  );

  return (
    <FooterContainer>
      <Logo />
      {renderSocialIcons()}
    </FooterContainer>
  );
};

export default Footer;
