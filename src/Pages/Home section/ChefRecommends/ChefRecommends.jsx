import img1 from "../../../assets/menu/banner2.jpg"
import img2 from "../../../assets/menu/dessert-bg.jpeg"
import img3 from "../../../assets/menu/salad-bg.jpg"
import img4 from "../../../assets/menu/soup-bg.jpg"
import Tittel from "../../../Componnes/Tittel/Tittel";

const ChefRecommends = () => {
    return (
        <div className="mb-10 lg:w-4/5 lg:mx-auto mx-5">
            <Tittel subTittel={"Should Try"} tittel={"CHEF RECOMMENDS"}/>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
                <div className="text-center p-5 border border-yellow-600">
                    <img className="w-full" src={img1} alt="" />
                    <h1 className="mt-2 text-xl tracking-[1px]">Caeser Salad</h1>
                    <p className="my-2 text-[14px]">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    <button className="btn text-[12px] font-bold border-b border-yellow-600 rounded-lg hover:bg-yellow-600 p-2 uppercase">add to card</button>
                </div>
                <div className="text-center p-5 border border-yellow-600">
                    <img className="w-full" src={img2} alt="" />
                    <h1 className="mt-2 text-xl tracking-[1px]">Caeser Salad</h1>
                    <p className="my-2 text-[14px]">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    <button className="btn text-[12px] font-bold border-b border-yellow-600 rounded-lg hover:bg-yellow-600 p-2 uppercase">add to card</button>
                </div>
                <div className="text-center p-5 border border-yellow-600">
                    <img className="w-full" src={img3} alt="" />
                    <h1 className="mt-2 text-xl tracking-[1px]">Caeser Salad</h1>
                    <p className="my-2 text-[14px]">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    <button className="btn text-[12px] font-bold border-b border-yellow-600 rounded-lg hover:bg-yellow-600 p-2 uppercase">add to card</button>
                </div>
                <div className="text-center p-5 border border-yellow-600">
                    <img className="w-full" src={img4} alt="" />
                    <h1 className="mt-2 text-xl tracking-[1px]">Caeser Salad</h1>
                    <p className="my-2 text-[14px]">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                    <button className="btn text-[12px] font-bold border-b border-yellow-600 rounded-lg hover:bg-yellow-600 p-2 uppercase">add to card</button>
                </div>
                
            </div>
        </div>
    );
};

export default ChefRecommends;