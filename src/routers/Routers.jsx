import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home section/Home/Home";
import ContactUs from "../Pages/ContactUs Section/ContactUs/ContactUs";
import OurMenuBanner from "../Pages/OurMenu Section/OurMenu Bannar/OurMenuBanner";

export const router = createBrowserRouter([
    {
      path: "/",
      element : <Main/>,
      children : [
        {
            path: "/",
            element: <Home/>
        },
        {
          path: "/contactUs",
          element: <ContactUs/>
        },
        {
          path: "/ourMenu",
          element: <OurMenuBanner/>
        }
      ]
    },
  ]);