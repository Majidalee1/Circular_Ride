import React from "react";
import { Button } from "@mui/material";

function About() {
  return (
    <div className="my-8 flex items-center justify-between flex-wrap  ">
      <div className="mx-auto">
        <img
          src="/About1.png"
          alt=""
          className="w-[450px] zero:h-[350px]  zero:w-full mobile:w-full laptop:w-full"
        />
      </div>
      <div className="w-[640px] space-y-6 mobile:w-full laptop:w-full z-10   ">
        <h1 className="text-[#204945] text-3xl font-bold zero:text-center mobile:text-center laptop:text-center">
          About Us
        </h1>
        <p className="text-sm mobile:text-center mobile:text-base laptop:text-center laptop:text-lg zero:text-center ">
          Circular Ride aims to digitize transportation management by providing
          intelligent fleet management and route optimization solutions,
          empowering enterprises to enhance efficiency, reduce costs, and
          promote sustainable transportation. Our vision is to transform the way
          transportation is managed in Pakistan, creating a future where every
          journey is optimized, resources are utilized effectively, and
          environmental impact is minimized, leading to a more connected and
          sustainable Pakistan.
        </p>

        <div className="flex zero:justify-center justify-start mobile:justify-center laptop:justify-center  ">
          <Button
            variant="contained"
            className="bg-[#0BB755] text-white"
            sx={{
              color: "white",
              borderRadius: "10px",
              boxShadow: "0px 5px 1px lightgreen",
              fontSize: "1rem",
              textTransform: "none",

              backgroundColor: "#0BB755",
              ":hover": {
                backgroundColor: "#0BB755",
                boxShadow: "0px 5px 1px lightgreen",
              },
            }}
          >
            Learn More
          </Button>
        </div>
      </div>
      <div className="">
        <img
          src="/gstar.png"
          alt=""
          className="
        absolute top-[135%] right-[15%]  w-[40px] 
        zero:hidden mobile:hidden
          

          opacity-[0.3]
        "
        />
        <img
          src="/Mountain.png"
          alt=""
          className=" absolute top-[112%] right-0  w-[140px] 
          zero:w-[150px] zero:top-[110%] zero:right-0 mobile:w-[150px] mobile:top-[110%] mobile:right-0 laptop:w-[180px] laptop:top-[112%] laptop:right-0
          zero:hidden
          mobile:hidden
          opacity-[0.3]
      
      
      "
        />
      </div>
    </div>
  );
}

export default About;
