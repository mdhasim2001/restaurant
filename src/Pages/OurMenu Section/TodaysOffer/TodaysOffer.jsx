import { useEffect, useState } from "react";
import Tittel from "../../../Componnes/Tittel/Tittel";
import Item from "../../../Sheared/Item/Item";
import Button from "../../../Componnes/Tittel/Button/Button";


const TodaysOffer = () => {

    const [todaysOffer, setTodaysOffer] = useState([])

    useEffect(() => {
        fetch("menu.json")
        .then(res => res.json())
        .then(data => setTodaysOffer(data.filter(item => item.category === "popular")))
    },[])


    return (
        <div className="lg:w-4/5 lg:mx-auto mx-5">
            <Tittel subTittel="Don't miss" tittel="today's offerd"/>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {
                    todaysOffer.map(item => <Item key={item._id} item={item}/>)
                }
            </div>
            <Button name="ORDER YOUR FAVOURITE FOOD"/>
        </div>
    );
};

export default TodaysOffer;