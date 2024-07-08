import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


const Main = () => {
    return (
        <div className="bg-[#1A2D1F] text-white">
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;