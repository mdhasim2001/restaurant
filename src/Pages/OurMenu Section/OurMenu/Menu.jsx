import Desserts from "../Desserts/Desserts";
import OurMenuBanner from "../OurMenu Bannar/OurMenuBanner";
import TodaysOffer from "../TodaysOffer/TodaysOffer";


const Menu = () => {
    return (
        <div>
            <OurMenuBanner/>
            <TodaysOffer/>
            <Desserts/>
        </div>
    );
};

export default Menu;