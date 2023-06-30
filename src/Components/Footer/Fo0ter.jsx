import { Alert, TextField } from "@mui/material";
import React, { useState } from "react";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.group(`

      Name: ${name}
      Email: ${email}

    `);
    if (!email) {
      setEmailError(true);
      return;
    }
    setIsSubmitted(true);

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);

    setName("");
    setEmail("");

    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
      setIsSubmitted(false);
    }, 3000);
  };
  return (
    <>
      <div className=" flex justify-between  flex-wrap mb-12 ">
        <div className=" w-[33%] p-4 border-r-2 border-dashed  zero:w-full zero:border-none mobile:w-full mobile:border-none">
          <div>
            <img src="/logo.png" alt="" className="mx-auto" />
          </div>
          <p className="text-center">
            Circular Ride is a B2B SaaS startup that optimizes transportation by
            leveraging data. Our platform provides intelligent fleet and route
            management for universities, schools, and corporate companies
            offering commuting services. We help reduce transportation costs,
            improve efficiency, and promote sustainability. Experience smarter
            transportation with Circular Ride.
          </p>
        </div>

        <div className=" w-[33%]  p-12 space-y-3  border-r-2 border-dashed py-[100px] mobile:py-[30px] zero:py-[30px] zero:border-none zero:w-full mobile:w-full mobile:border-none">
          <h1 className="font-bold text-2xl  ">Contact Us</h1>
          <h2 className="text-sm pt-4 ">
            {" "}
            <PhoneOutlinedIcon
              sx={{
                fontSize: "20px",
              }}
            />
            +92 325 1313776
          </h2>
          <h2 className="text-sm ">
            {" "}
            <EmailOutlinedIcon
              sx={{
                fontSize: "20px",
              }}
            />{" "}
            connect@circularride.tech
          </h2>
          <h2 className="text-sm ">
            {" "}
            <LocationOnOutlinedIcon
              sx={{
                fontSize: "20px",
              }}
            />{" "}
            National Incubation Center Hyderabad
          </h2>
        </div>
        <div className=" w-[33%] p-12 zero:w-full mobile:w-full ">
          <h1 className="font-bold text-2xl">Subcribe</h1>

          <form onSubmit={handleSubmit}>
            <div className="py-12">
              <TextField
                id="standard-basic"
                label="Name"
                variant="standard"
                fullWidth
                required
                value={name}
                onChange={handleNameChange}
              />
              <TextField
                id="standard-basic"
                label="Email"
                type="email"
                required
                fullWidth
                variant="standard"
                sx={{
                  my: "10px",
                  borderColor: emailError ? "red" : undefined,
                }}
                value={email}
                onChange={handleEmailChange}
              />
            </div>

            <div className="flex items-center  mt-4">
              <button
                type="submit"
                className={`${
                  isSubmitted ? "submitted" : ""
                } bg-[#0BB755] px-10 py-2 cursor-pointer text-white  rounded-[10px]  boxshadow `}
              >
                {isSubmitted ? "Subscribed" : "Subscribe"}
              </button>
            </div>
            {showAlert && (
              <Alert
                fullWidth
                sx={{
                  position: "fixed",

                  bottom: "20px",
                  left: "16px",
                  zIndex: 9999,
                  width: "calc(100% - 32px)",
                  bgcolor: "#0BB755",
                  color: "#fff",
                }}
                severity={emailError ? "error" : "success"}
                onClose={() => setShowAlert(false)}
              >
                {emailError
                  ? "Please enter a valid email"
                  : "Subcribe successfully!"}
              </Alert>
            )}
          </form>
        </div>
      </div>
      <div className="  border-2  border-dashed" />
      <div className="my-4 flex items-center justify-between">
        <div>
          <h1 className=" text-sm zero:text-xs mobile:text-xs">
            Copyright 2023 | Circular Ride - All rights Reserved
          </h1>
        </div>
        <div className="flex space-x-2">
          <TwitterIcon
            sx={{
              cursor: "pointer",
            }}
          />
          <FacebookIcon
            sx={{
              cursor: "pointer",
            }}
          />
          <InstagramIcon
            sx={{
              cursor: "pointer",
            }}
          />
          <img
            src="https://th.bing.com/th/id/OIP.IYfnL3tjRVop1JV6ML5LKAHaHa?w=204&h=204&c=7&r=0&o=5&dpr=1.5&pid=1.7"
            alt=""
            className="w-5 h-5 rounded-full cursor-pointer"
          />
        </div>
      </div>

      <div className="relative">
        <img
          src="/footerimg.png"
          alt=""
          className=" 
          absolute -left-20 bottom-0  zero:hidden mobile:hidden
          w-[560px] 
          
      
      
      "
        />
      </div>
    </>
  );
}

export default Footer;
