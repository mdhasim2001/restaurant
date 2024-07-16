import "./ItemBanner.css"

const ItemBanner = ({heding, discription}) => {
    return (
        <div className="itemBanner flex flex-col items-center justify-center">
            <div className="bgBanner lg:w-2/4 w-4/5 mx-auto py-20 px-5">
                <h1 className="uppercase text-center text-4xl mb-5 font-bold">{heding}</h1>
                <p className="text-center text-[14px]">{discription}</p>
            </div>
        </div>
    );
};

export default ItemBanner;