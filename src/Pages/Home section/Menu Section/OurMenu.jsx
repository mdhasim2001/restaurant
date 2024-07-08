import Tittel from "../../../Componnes/Tittel/Tittel";
import "./OurMenu.css"

const OurMenu = () => {
    return (
        <div>
            <div className="ourMenu mt-28 flex flex-col items-center justify-center p-10">
            <h1 className="uppercase text-3xl my-5">restaurant</h1>
            <p className="lg:w-2/4 mx-auto text-center text-[12px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores architecto soluta dolorem fugiat perferendis nesciunt voluptatum molestiae facere a pariatur aspernatur consectetur hic veniam in, tenetur dolore! Officiis, unde dolores.</p>
        </div>
            <Tittel subTittel={"Check it out"} tittel={"from our menu"}/>
        </div>
    );
};

export default OurMenu;