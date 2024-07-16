import { useEffect, useState } from "react";
import Button from "../../../Componnes/Tittel/Button/Button";
import Item from "../../../Sheared/Item/Item";
import ItemBanner from "../../../Sheared/ItemBanner/ItemBanner";


const Salad = () => {


    const [salad, setSalad] = useState([])

    useEffect(() => {
        fetch("menu.json")
        .then(res => res.json())
        .then(data => setSalad(data.filter(item => item.category === "salad")))
    },[])

    return (
        <div>
            <ItemBanner heding="salad" discription="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
            <div className="lg:w-4/5 lg:mx-auto mx-5 my-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {
                        salad.map(item => <Item key={item._id} item={item}/>)
                    }
                </div>
                <Button name="ORDER YOUR FAVOURITE FOOD"/>
            </div>
        </div>
    );
};

export default Salad;