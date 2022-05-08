const Nav = ({ isExpanded, children }) => (
  <nav
    className={`text-sm lg:flex-grow lg:block ${
      isExpanded && "flex flex-col align-middle justify-center align-center"
    }`}
  >
    {children}
  </nav>
);

export default Nav;
