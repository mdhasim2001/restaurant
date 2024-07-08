import Visit from "../../../assets/dashboard/image-5.jpg"

const VisitUs = () => {
    return (
        <div className="lg:flex items-center justify-center lg:h-[100vh] border-t border-b border-[#8D7356]">
            <div className="flex-1 lg:border-r border-[#8D7356] py-10 lg:py-0">
                <div className="flex lg:flex-col gap-5 items-center justify-center">
                    <div className="">
                        <h1 className="uppercase text-2xl my-3 tracking-[5spx]">visit us</h1>
                        <p className="mb-1 opacity-70">eight avenue 487, NY,</p>
                        <p className="mb-1 opacity-70">T. +12 344 0567899</p>
                        <p className="mb-1 opacity-70">M. fidalgo@example.com</p>
                    </div>
                    <div className="">
                        <h1 className="uppercase text-2xl my-3 tracking-[5spx]">visit us</h1>
                        <p className="mb-1 opacity-70">eight avenue 487, NY,</p>
                        <p className="mb-1 opacity-70">T. +12 344 0567899</p>
                        <p className="mb-1 opacity-70">M. fidalgo@example.com</p>
                    </div>
                    <div className="">
                        <h1 className="uppercase text-2xl my-3 tracking-[5spx]">visit us</h1>
                        <p className="mb-1 opacity-70">eight avenue 487, NY,</p>
                        <p className="mb-1 opacity-70">T. +12 344 0567899</p>
                        <p className="mb-1 opacity-70">M. fidalgo@example.com</p>
                    </div>
                </div>
            </div>
            <div className="flex-1 h-full">
                <img className="w-full h-full" src={Visit} alt="" />
            </div>
        </div>
    );
};

export default VisitUs;