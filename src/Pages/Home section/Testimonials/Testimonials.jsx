import { useEffect, useState } from "react";
import Tittel from "../../../Componnes/Tittel/Tittel";
import Rating from "./Rating";


const Testimonials = () => {

    const [testimonial, setTestimonial] = useState([])

    useEffect(() => {
        fetch("reviews.json")
        .then(res => res.json())
        .then(data => setTestimonial(data))
    },[])

    return (
        <div className=" mx-5">
            <Tittel subTittel={"What Our Clients Say"} tittel={"TESTIMONIALS"}/>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 text-center mb-20">
                {
                    testimonial.map(item => <Rating key={item._id} item={item}/>)
                }
            </div>
        </div>
    );
};

export default Testimonials;