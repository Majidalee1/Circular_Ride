import React, { useState } from "react";

function Offer() {
  return (
    <div className="my-12">
      <h1 className="text-4xl font-bold ml-4 zero:text-center mobile:text-center laptop:text-center">
        What We Offer?
      </h1>{" "}
      <div className="my-8 flex items-center space-x-4  zero:flex-wrap ">
        <div className=" flex flex-col  border-l-[1.5px] border-black  zero:border-none border-dotted p-4  ">
          <div className="h-[173px] w-[255px] flex justify-center items-center mx-auto">
            {" "}
            <img
              src="/icon.png"
              alt=""
              className="mx-auto 
            bg-[#0BB755] rounded-2xl p-4
             h-[80px] w-[80px]
             



            


             "
            />
          </div>

          <div className="space-y-4">
            <h1 className=" text-center font-bold">FLEET MANAGEMENT</h1>
            <p className=" text-center text-sm">
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua
            </p>
          </div>
        </div>
        <div className=" flex flex-col  border-l-[1.5px] border-black zero:border-none border-dotted p-4 ">
          <div className="h-[173px] w-[255px] flex justify-center items-center mx-auto">
            {" "}
            <img
              src="/icon.png"
              alt=""
              className="mx-auto 
            bg-[#0BB755] rounded-2xl p-4
             h-[80px] w-[80px]
             



            


             "
            />
          </div>

          <div className="space-y-4">
            <h1 className="text-center font-bold">FLEET MANAGEMENT</h1>
            <p className="text-center text-sm">
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua
            </p>
          </div>
        </div>
        <div className=" flex flex-col  border-l-[1.5px] border-black  zero:border-none border-dotted p-4 ">
          <div className="h-[173px] w-[255px] flex justify-center items-center mx-auto">
            {" "}
            <img
              src="/icon.png"
              alt=""
              className="mx-auto 
            bg-[#0BB755] rounded-2xl p-4
             h-[80px] w-[80px]
             



            


             "
            />
          </div>

          <div className="space-y-4">
            <h1 className=" text-center font-bold">FLEET MANAGEMENT</h1>
            <p className=" text-center text-sm">
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offer;
