import { Link } from "react-router-dom";

const NavItem = ({ link, children }) => (
  <Link
    to={link}
    className="flex align-center justify-center align-middle tracking-widest text-center list-style-none text-2xl my-8 mx-auto lg:mr-8 mt-4 lg:inline-block lg:mt-0 lg:text-sm text-white cursor-pointer lg:my-auto hover:scale-110 transition uppercase hover:underline hover:decoration-wavy hover:decoration-violet-800 hover:font-semibold"
  >
    {children}
  </Link>
);

export default NavItem;
