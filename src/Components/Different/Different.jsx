import React from "react";

function Different() {
  return (
    <div className="my-32">
      <h1
        className="font-bold text-3xl zero:text-center mobile:text-center laptop:text-center
      "
      >
        How are we different?
      </h1>
      <div className="my-16 flex items-center space-x-4 zero:space-y-4 zero:space-x-0  zero:flex-wrap mobile:flex-wrap mobile:space-x-0 mobile:space-y-4 mobile:mx-auto mobile:w-full">
        <div className=" flex items-center   p-8  myphone  mobile:mx-auto mobile:w-full  ">
          <div>
            {" "}
            <h1 className="text-4xl mobile:text-3xl p-4 font-bold text-[#C1EADD]">
              01
            </h1>
          </div>

          <div className="p-4  space-y-3  ">
            <h1 className="  font-semibold">Data Insights</h1>
            <p className="  text-sm">
              Stacks is a production-ready library of stackable content blocks
              built in React Native
            </p>
          </div>
        </div>
        <div className=" flex items-center   p-8  myphone  mobile:mx-auto mobile:w-full ">
          <div>
            {" "}
            <h1 className="text-4xl p-4 font-bold text-[#C1EADD]">01</h1>
          </div>

          <div className="p-4  space-y-3 ">
            <h1 className="  font-semibold">Data Insights</h1>
            <p className="  text-sm">
              Stacks is a production-ready library of stackable content blocks
              built in React Native
            </p>
          </div>
        </div>
        <div className=" flex items-center   p-8  myphone  mobile:mx-auto mobile:w-full">
          <div>
            {" "}
            <h1 className="text-4xl p-4 font-bold text-[#C1EADD]">01</h1>
          </div>

          <div className="p-4  space-y-3 ">
            <h1 className="  font-semibold">Data Insights</h1>
            <p className="  text-sm">
              Stacks is a production-ready library of stackable content blocks
              built in React Native
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Different;
