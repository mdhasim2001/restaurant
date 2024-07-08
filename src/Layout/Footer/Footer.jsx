const Footer = () => {
  return (
    <div className="p-5 lg:pt-20 bg-[#16261A]">
      <div className="lg:w-4/5 mx-auto">
        <div className="mx-10 lg:flex items-center justify-between text-center">
          <div className="my-10 lg:my-0">
            <h1 className="uppercase text-2xl tracking-[2px] mb-3">
              contact us
            </h1>
            <p className="tracking-[1px]">T .79345729047</p>
            <p className="tracking-[1px]">M . nana.nani@gmail.com</p>
          </div>
          <div className="hidden lg:block w-[1px] h-32 bg-white"></div>
          <hr className="lg:hidden w-full h-[1px] bg-white" />
          <div className="my-10 lg:my-0">
            <h1 className="uppercase text-2xl tracking-[2px] mb-3">address</h1>
            <p className="tracking-[1px]">Piazza Della Signoria, 12</p>
            <p className="tracking-[1px]">21562 . Firenze . italy</p>
          </div>
          <div className="hidden lg:block w-[1px] h-32 bg-white"></div>
          <hr className="lg:hidden w-full h-[1px] bg-white" />

          <div className="my-10 lg:my-0">
            <h1 className="uppercase text-2xl tracking-[2px] mb-3">
              opening hours
            </h1>
            <p className="tracking-[1px]">Everyday : From 12.30 To 23.00</p>
            <p className="tracking-[1px]">Kitchen Closes At 22.00</p>
          </div>
        </div>
        <div className="mt-20">
          <div>
            <div className="w-full h-[1px] bg-white"></div>
            <h1 className="uppercase">nana food</h1>
          </div>
        </div>
        <div className="h-20 lg:flex items-center justify-between">
          <div className="flex items-center justify-center gap-5 text-[12px]">
            <p className="uppercase">pinterest</p>
            <p className="uppercase">facebook</p>
            <p className="uppercase">instagram</p>
          </div>
          <div className="text-[12px]">
            <p className="uppercase">
              2024 qode ineractive, all rights reserver
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
