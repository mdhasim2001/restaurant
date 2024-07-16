import { useEffect, useState } from "react";
import Tittel from "../../../Componnes/Tittel/Tittel";
import "./OurMenu.css";
import Item from "../../../Sheared/Item/Item";
import Button from "../../../Componnes/Tittel/Button/Button";

const OurMenu = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        fetch("menu.json")
        .then(res => res.json())
        .then(data => setItems(data.filter(item => item.category === "popular")))
    },[])

  return (
    <div>
      <div className="ourMenu mt-28 flex flex-col items-center justify-center p-10">
        <h1 className="uppercase text-3xl my-5">restaurant</h1>
        <p className="lg:w-2/4 mx-auto text-center text-[12px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          architecto soluta dolorem fugiat perferendis nesciunt voluptatum
          molestiae facere a pariatur aspernatur consectetur hic veniam in,
          tenetur dolore! Officiis, unde dolores.
        </p>
      </div>
      <Tittel subTittel={"Check it out"} tittel={"from our menu"} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {
            items.map(item => <Item key={item._id} item={item}/>)
        }
      </div>
      <Button name="more"/>
    </div>
  );
};

export default OurMenu;
