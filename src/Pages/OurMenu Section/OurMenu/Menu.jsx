import Desserts from "../Desserts/Desserts";
import OurMenuBanner from "../OurMenu Bannar/OurMenuBanner";
import Pizza from "../Pizza/Pizza";
import Salad from "../Salad/Salad";
import Soup from "../Soup/Soup";
import TodaysOffer from "../TodaysOffer/TodaysOffer";


const Menu = () => {
    return (
        <div>
            <OurMenuBanner/>
            <TodaysOffer/>
            <Desserts/>
            <Pizza/>
            <Salad/>
            <Soup/>
        </div>
    );
};

export default Menu;