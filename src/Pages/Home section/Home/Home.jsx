import Banner from "../Banner/Banner";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import HelpYou from "../HelpYou/HelpYou";
import OurMenu from "../Menu Section/OurMenu";
import OrderOnline from "../Order online/OrderOnline";
import Testimonials from "../Testimonials/Testimonials";
import VisitUs from "../VisitUs/VisitUs";

const Home = () => {
  return (
    <div>
      <Banner />
        <OrderOnline />
      <div className="lg:w-4/5 lg:mx-auto mx-5 my-20">
        <OurMenu/>
      </div>
      <ChefRecommends/>
      <VisitUs/>
      <HelpYou/>
      <Testimonials/>
    </div>
  );
};

export default Home;
