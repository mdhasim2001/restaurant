import Tittel from "../../../Componnes/Tittel/Tittel";
import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";

const OrderOnline = () => {
  return (
    <div>
      <Tittel subTittel={"From 11:00am to 10:00pm"} tittel={"order online"} />
      <div className="mx-5 grid grid-cols-5">
        <div>
          <img
            className="border opacity-50 lg:p-5 p-1 border-[#8D7356]"
            src={img1}
            alt=""
          />
          <p className="uppercase -mt-14 text-center">salads</p>
        </div>
        <div>
          <img
            className="border opacity-50 lg:p-5 p-1 border-[#8D7356]"
            src={img2}
            alt=""
          />
          <p className="uppercase -mt-14 text-center">salads</p>
        </div>
        <div>
          <img
            className="border opacity-50 lg:p-5 p-1 border-[#8D7356]"
            src={img3}
            alt=""
          />
          <p className="uppercase -mt-14 text-center">salads</p>
        </div>
        <div>
          <img
            className="border opacity-50 lg:p-5 p-1 border-[#8D7356]"
            src={img4}
            alt=""
          />
          <p className="uppercase -mt-14 text-center">salads</p>
        </div>
        <div>
          <img
            className="border opacity-50 lg:p-5 p-1 border-[#8D7356]"
            src={img5}
            alt=""
          />
          <p className="uppercase -mt-14 text-center">salads</p>
        </div>
      </div>
    </div>
  );
};

export default OrderOnline;
