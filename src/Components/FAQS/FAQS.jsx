import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function FAQS() {
  const [button1MarginRight, setButton1MarginRight] = useState("1rem");
  const [button2MarginRight, setButton2MarginRight] = useState("1rem");
  const [button3MarginRight, setButton3MarginRight] = useState("1rem");

  const handleButtonClick = (buttonNumber) => {
    if (buttonNumber === 1) {
      setButton1MarginRight(button1MarginRight === "10px" ? "-10px" : "10px");
      setButton2MarginRight("10px");
      setButton3MarginRight("10px");

      renderLorem(50);
    } else if (buttonNumber === 2) {
      setButton2MarginRight(button2MarginRight === "10px" ? "-10px" : "10px");
      setButton1MarginRight("10px");
      setButton3MarginRight("10px");

      renderLorem(70);
    } else if (buttonNumber === 3) {
      setButton3MarginRight(button3MarginRight === "10px" ? "-10px" : "10px");
      setButton1MarginRight("10px");
      setButton2MarginRight("10px");

      renderLorem(80);
    }
  };

  useEffect(() => {
    renderLorem(50);
    setButton1MarginRight("-10px");
  }, []);

  const [loremText, setLoremText] = useState("");

  const renderLorem = (words) => {
    const lorem =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae magna vitae diam feugiat interdum sed eget nisl.";

    const repeatedLorem = lorem.repeat(Math.ceil(words / 24));

    const trimmedLorem = repeatedLorem.split(" ").slice(0, words).join(" ");

    setLoremText(trimmedLorem);
  };

  return (
    <div className="space-y-4  my-16 w-[85%] zero:w-full mx-auto">
      <img
        src="/dots.png"
        alt=""
        className="h-[50px] w-[50px] zero:hidden mobile:hidden"
      />
      <h1 className="text-center font-bold text-3xl">FAQS</h1>
      <p className="text-center font-medium text-base">
        Questions that are asked by our clients
      </p>
      <div className="flex   zero:flex-wrap zero:space-y-4  ">
        <div className=" flex flex-col zero:flex-row    space-y-1   zero:space-x-3 zero:overflow-x-auto">
          <Button
            onClick={() => handleButtonClick(1)}
            endIcon={
              <ArrowForwardIosIcon
                sx={{
                  color: "#0BB755",
                  "&:hover": {
                    backgroundColor: "none",

                    opacity: 0.8,
                    color: "#E3F9E7",
                  },
                }}
              />
            }
            className=" "
            sx={{
              color: "#000",

              marginRight: {
                xs: 0,
                sm: button1MarginRight,
                md: button1MarginRight,
                lg: button1MarginRight,
                xl: button1MarginRight,
              },

              p: 3,
              fontSize: "10px",
              fontWeight: "bold",
              boxShadow: "none",

              backgroundColor: "#E3F9E7",

              "&:hover": {
                opacity: 0.8,
                boxShadow: "none",

                backgroundColor: "#E3F9E7",
              },
            }}
            variant="contained"
          >
            How can I avail your Services
          </Button>
          <div>
            <img
              src="/gstar.png"
              alt=""
              className="
          absolute h-[40px] w-[40px] left-[9%]  zero:hidden mobile:hidden
          opacity-50
          "
            />
          </div>
          <Button
            onClick={() => handleButtonClick(2)}
            endIcon={
              <ArrowForwardIosIcon
                sx={{
                  color: "#0BB755",
                  "&:hover": {
                    backgroundColor: "none",
                    opacity: 0.8,
                    color: "#E3F9E7",
                  },
                }}
              />
            }
            className=""
            sx={{
              color: "#000",
              marginRight: {
                xs: 0,
                sm: button2MarginRight,
                md: button2MarginRight,
                lg: button2MarginRight,
                xl: button2MarginRight,
              },

              p: 3,
              fontSize: "10px",
              boxShadow: "none",
              fontWeight: "bold",

              backgroundColor: "#E3F9E7",
              "&:hover": {
                opacity: 0.8,
                backgroundColor: "#E3F9E7",
                boxShadow: "none",
              },
            }}
            variant="contained"
          >
            How can I avail your Services
          </Button>

          <Button
            onClick={() => handleButtonClick(3)}
            endIcon={
              <ArrowForwardIosIcon
                sx={{
                  color: "#0BB755",
                  "&:hover": {
                    backgroundColor: "none",
                    opacity: 0.8,
                    color: "#E3F9E7",
                  },
                }}
              />
            }
            sx={{
              color: "#000",
              marginRight: {
                xs: 0,
                sm: button3MarginRight,
                md: button3MarginRight,
                lg: button3MarginRight,
                xl: button3MarginRight,
              },

              p: 3,
              fontSize: "10px",
              boxShadow: "none",
              fontWeight: "bold",

              backgroundColor: "#E3F9E7",
              "&:hover": {
                opacity: 0.8,
                backgroundColor: "#E3F9E7",
                boxShadow: "none",
              },
            }}
            variant="contained"
          >
            How can I avail your Services
          </Button>
        </div>
        <div className="w-full h-[265px] bg-[#E3F9E7] rounded-lg p-4">
          {loremText}
        </div>
      </div>
    </div>
  );
}

export default FAQS;
