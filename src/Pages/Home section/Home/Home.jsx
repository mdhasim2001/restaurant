import Banner from "../Banner/Banner";
import OurMenu from "../Menu Section/OurMenu";
import OrderOnline from "../Order online/OrderOnline";
import VisitUs from "../VisitUs/VisitUs";

const Home = () => {
  return (
    <div>
      <Banner />
        <OrderOnline />
      <div className="lg:w-4/5 lg:mx-auto mx-5 my-20">
        <OurMenu/>
      </div>
      <VisitUs/>
    </div>
  );
};

export default Home;
