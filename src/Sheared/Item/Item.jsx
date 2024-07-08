import "./Item.css"

const Item = ({item}) => {

    const {image, name, recipe, price} = item

    return (
        <div className="flex justify-between gap-2">
            <img className="menuImage w-20" src={image} alt="" />
            <div>
                <h1 className="text-xl">{name}</h1>
                <p className="text-[12px]">{recipe}</p>
            </div>
            <p className="text-yellow-600">${price}</p>
        </div>
    );
};

export default Item;