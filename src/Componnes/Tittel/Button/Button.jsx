

const Button = ({name}) => {
    return (
        <div className="text-center my-10">
        <button className="btn uppercase mx-auto border-b rounded-lg text-[14px] border-yellow-600 p-2 ">{name}</button>
      </div>
    );
};

export default Button;