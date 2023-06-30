import React from "react";

function Hero() {
  return (
    <>
      <div className="  flex items-center justify-between flex-wrap">
        <div className=" w-[400px] zero:w-full zero:text-center mobile:text-center mobile:w-full ">
          <h1 className="text-[#204945] font-bold space-y-2 text-7xl py-4 zero:text-5xl">
            Digitizing traditional transport
          </h1>
          <h1 className="font-medium text-[#204945]  ">
            One-Stop B2B SaaS Transport Solution!
          </h1>
        </div>
        <div className="mx-20 zero:w-full zero:m-0 mobile:w-full mobile:m-0 ">
          <div>
            <img
              src="/gstar.png"
              alt=""
              className="absolute top-[50%]
            zero:hidden mobile:hidden 
            h-[50px] w-[50px]
            left-[50%] 
            opacity-50
            "
            />
          </div>

          <img
            src="/Hero.png"
            alt=""
            className=" h-[500px] zero:h-full mobile:h-full   zero:mx-auto mobile:mx-auto laptop:mx-auto "
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
