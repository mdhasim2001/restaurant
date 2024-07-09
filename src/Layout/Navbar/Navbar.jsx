import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { MdRestaurantMenu } from "react-icons/md";
import logo from "../../assets/home/logo.png";

const Navbar = () => {
  const [navbar, setNavbar] = useState(true);

  const navbarTule = (nav) => {
    setNavbar(nav);
  };

  return (
    <div className="lg:w-[90%] lg:mx-auto flex items-center justify-between  mx-5 h-20 text-[14px]">
      <Link to="/" className="text-xl uppercase cursor-pointer ">
        <img className="w-10" src={logo} alt="" />
      </Link>
      <div className="flex items-center justify-center">
        <div className={`${navbar ? "hidden" : "hasim"}  lg:block`}>
          <ul className="uppercase lg:flex lg:gap-5">
            <button
              onClick={() => navbarTule(true)}
              className="right-5 top-5 absolute lg:hidden"
            >
              <MdRestaurantMenu className="w-5 h-5" />
            </button>
            <li onClick={() => navbarTule(true)}>
              <Link>Home</Link>
            </li>
            <li onClick={() => navbarTule(true)}>
              <Link>Contact Us</Link>
            </li>
            <li onClick={() => navbarTule(true)}>
              <Link to="dashboard">DASHBOARD</Link>
            </li>
            <li onClick={() => navbarTule(true)}>
              <Link>our menu</Link>
            </li>
            <li onClick={() => navbarTule(true)}>
              <Link>our shop</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center gap-5 h-full">
        <div>
          <Link className="uppercase cursor-pointer">sing up</Link>
        </div>
        <div className="lg:hidden">
          {navbar ? (
            <button onClick={() => navbarTule(false)}>
              <MdRestaurantMenu className="w-5 h-5" />
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
