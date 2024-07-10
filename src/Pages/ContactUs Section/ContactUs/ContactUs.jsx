

const ContactUs = () => {
    return (
        <div>
            <h1 className="text-center border-t border-yellow-600 uppercase py-20 text-3xl font-bold">contact us</h1>
            <div className="md:w-3/4 md:mx-auto mx-5">
                <div className="w-full">
                    <input className="w-full my-5 p-2 bg-[#1A2D1F] border-b border-yellow-600 outline-none" type="text" placeholder="NAME" />
                    <input className="w-full my-5 p-2 bg-[#1A2D1F] border-b border-yellow-600 outline-none" type="email" placeholder="EMAIL" />
                    <textarea className="w-full my-5 p-2 bg-[#1A2D1F] border-b border-yellow-600 outline-none" name="" placeholder="WRITE YOUR MASSES" id=""></textarea>
                </div>
                <button className="w-full p-2 text-center my-10 border border-yellow-600">Submit</button>
            </div>
        </div>
    );
};

export default ContactUs;