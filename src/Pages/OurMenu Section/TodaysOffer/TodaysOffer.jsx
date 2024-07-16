import { useEffect, useState } from "react";


const TodaysOffer = () => {

    const [todaysOffer, setTodaysOffer] = useState([])

    useEffect(() => {
        fetch("menu.json")
        .then(res => res.json())
        .then(data => setTodaysOffer(data.map(item => item.category === "offered")))
    },[])

    console.log(todaysOffer);

    return (
        <div>
            
        </div>
    );
};

export default TodaysOffer;