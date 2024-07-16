import { useEffect, useState } from "react";
import ItemBanner from "../../../Sheared/ItemBanner/ItemBanner";
import Button from "../../../Componnes/Tittel/Button/Button";
import Item from "../../../Sheared/Item/Item";


const Soup = () => {

    const [soup, setSoup] = useState([])

    useEffect(() => {
        fetch("menu.json")
        .then(res => res.json())
        .then(data => setSoup(data.filter(item => item.category === "soup")))
    },[])

    return (
        <div>
            <ItemBanner heding="soup" discription="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
            <div className="lg:w-4/5 lg:mx-auto mx-5 my-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {
                        soup.map(item => <Item key={item._id} item={item}/>)
                    }
                </div>
                <Button name="ORDER YOUR FAVOURITE FOOD"/>
            </div>
        </div>
    );
};

export default Soup;