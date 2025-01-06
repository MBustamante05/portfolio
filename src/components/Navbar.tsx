import { useNavigate } from "react-router-dom";

function Navbar() {
  const liStyle = "hover:text-primary cursor-pointer hover:border-b-2 hover:border-primary font-semibold hover:font-bold transition duration-300 ease-in-out";
  const navigate = useNavigate();
  return (
    <nav className="navbar text-neutral-content items-center justify-between bg-black px-5">
        <h1 className=" font-semibold text-xl text-white cursor-pointer" onClick={() => navigate("/")}>MBus</h1>
        <ul className="menu menu-horizontal gap-4">
          <li className={liStyle}>Home</li>
          <li className={liStyle}>About</li>
          <li className={liStyle}>Projects</li>
          <li className="font-bold text-primary hover:text-primary-focus cursor-pointer border border-primary px-5 rounded-sm py-2 hover:bg-primary hover:text-white transition duration-300 ease-in-out">
            Contact
          </li>
        </ul>
      </nav>
  )
}

export default Navbar