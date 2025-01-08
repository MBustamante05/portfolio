import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

type Props = {
  showLinks: boolean;
};
function Navbar({ showLinks }: Props) {
  const liStyle =
    "items-center justify-between hover:text-primary cursor-pointer hover:border-b-2 hover:border-primary font-semibold hover:font-bold transition duration-300 ease-in-out p-1 ";

  const contactStyle =
    "font-bold text-primary hover:text-primary-focus cursor-pointer border border-primary px-5 rounded-sm py-2 hover:bg-primary hover:text-white transition duration-300 ease-in-out cursor-pointer";
  const navigate = useNavigate();
  return (
    <div className="navbar bg-black sm:ps-5 sm:pe-6">
      <div className="navbar-start">
        <div className="dropdown">
          {showLinks && (
            <>
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="bg-black flex flex-col dropdown-content rounded-sm z-[20] mt-3 w-52 p-2 shadow z-20 gap-2"
              >
                <Link to="home" smooth={true} duration={500}>
                  <li className={liStyle}>Home</li>
                </Link>
                <Link to="about" smooth={true} duration={500}>
                  <li className={liStyle}>About</li>
                </Link>
                <Link to="projects" smooth={true} duration={500}>
                  <li className={liStyle}>Projects</li>
                </Link>
                <Link to="contact" smooth={true} duration={500}>
                  <li className={contactStyle}>Contact</li>
                </Link>
              </ul>
            </>
          )}
        </div>
        <h1
          className="text-2xl text-white font-medium cursor-pointer"
          onClick={() => navigate("/")}
        >
          MB
        </h1>
      </div>
      {showLinks && (
        <div className="navbar-end hidden lg:flex  ">
          <ul className="menu menu-horizontal px-1 items-center gap-4">
            <Link to="home" smooth={true} duration={500}>
              <li className={liStyle}>Home</li>
            </Link>
            <Link to="about" smooth={true} duration={500}>
              <li className={liStyle}>About</li>
            </Link>
            <Link to="projects" smooth={true} duration={500}>
              <li className={liStyle}>Projects</li>
            </Link>
            <Link to="contact" smooth={true} duration={500}>
              <li className={contactStyle}>Contact</li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
