

const Tittel = ({subTittel, tittel}) => {
    return (
        <div className="text-center mx-auto w-60 my-20">
            <p className="text-[12px] text-yellow-600 my-2">---{subTittel}---</p>
            <h1 className="uppercase text-xl my-3 py-3 border-t border-b">{tittel}</h1>
        </div>
    );
};

export default Tittel;