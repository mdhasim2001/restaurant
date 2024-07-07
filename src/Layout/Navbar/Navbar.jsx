import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    const [navbar, setNavbar] = useState(true)

    const navbarTule = (nav) => {
        setNavbar(nav)
    }

    console.log(navbar);

  return (
    <div className=" flex items-center justify-between lg:w-4/5 lg:mx-auto mx-5 h-20 text-[14px]">
      <Link to="/" className="text-3xl font-bold cursor-pointer">
        Restaurant
      </Link>
      <div className="flex items-center justify-center">
            <div className={`${navbar ? "absolute" : ""} nav hidden lg:block`}>
                <ul className="uppercase lg:flex lg:gap-5">
                    <li>
                    <Link>Home</Link>
                    </li>
                    <li>
                    <Link>Contact Us</Link>
                    </li>
                    <li>
                    <Link to="dashboard">DASHBOARD</Link>
                    </li>
                    <li>
                    <Link>our menu</Link>
                    </li>
                    <li>
                    <Link>our shop</Link>
                    </li>
                </ul>
            </div>
            <div className="lg:hidden">
                {
                    navbar ? <button onClick={() => navbarTule(false)}>O</button> : 
                    <button onClick={() => navbarTule(true)}>X</button>
                }
            </div>
      </div>
    </div>
  );
};

export default Navbar;
