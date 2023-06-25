import { Alert, Box, IconButton, TextField } from "@mui/material";
import { Event } from "@mui/icons-material";
import React, { useState } from "react";
import styled from "@emotion/styled";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
function Appoiment() {
  const [bookingDate, setBookingDate] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [bookingDateError, setBookingDateError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleBookingDateChange = (event) => {
    setBookingDate(event.target.value);
    setBookingDateError(false);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
    setNameError(false);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError(false);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
    setPhoneError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.group(`
      Booking Date: ${bookingDate}
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
    `);
    if (!email) {
      setEmailError(true);
      return;
    }

    if (!bookingDate) {
      setBookingDateError(true);
      return;
    }

    if (!name) {
      setNameError(true);
      return;
    }

    if (!phone) {
      setPhoneError(true);
      return;
    }
    setIsSubmitted(true);
    localStorage.setItem("bookingDate", bookingDate);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);

    setBookingDate("");
    setName("");
    setEmail("");
    setPhone("");

    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
      setIsSubmitted(false);
    }, 3000);
  };
  return (
    <div
      style={{
        backgroundColor: "#E3F9E7",
      }}
      className=" w-full zero:pb-8 lcd:h-[85vh] mobile:h-[45vh] laptop:h-[40vh] my-16 rounded-3xl flex items-center justify-evenly flex-wrap zero:flex-col zero:space-y-4 zero:items-center zero:justify-center "
    >
      <div className="w-[50%] zero:w-full mx-auto">
        <h1 className=" font-bold text-3xl py-4 text-center ">
          Book an appointment
        </h1>
        <p className="text-center ">Request demo and avail our services!</p>

        <div className="zero:hidden mobile:hidden mt-16  ">
          <img src="/User.png" alt="" className="h-[300px] mx-auto  " />
        </div>
      </div>
      <div className="h-[434px] w-[38%] zero:w-[80%] mx-auto  rounded-2xl  bg-white boxs px-10 py-4 ">
        <form onSubmit={handleSubmit}>
          <div className="flex items-center space-x-4 mb-2">
            <span className="bg-[#0BB755] p-2 rounded-lg">
              <CalendarMonthOutlinedIcon
                sx={{
                  color: "white",
                  fontSize: "25px",
                }}
              />
            </span>
            <h1 className="font-bold">Booking Date</h1>
          </div>
          <TextField
            id="standard-basic"
            type="date"
            variant="standard"
            fullWidth
            value={bookingDate}
            onChange={handleBookingDateChange}
          />
          <div className="flex items-center space-x-4 my-2">
            <span className="bg-[#0BB755] p-2 rounded-lg">
              <PhoneOutlinedIcon
                sx={{
                  color: "white",
                  fontSize: "25px",
                }}
              />
            </span>
            <h1 className="font-bold">Phone Number</h1>
          </div>
          <TextField
            id="standard-basic"
            type="number"
            variant="standard"
            fullWidth
            value={phone}
            onChange={handlePhoneChange}
          />
          <div className="flex items-center space-x-4 my-2">
            <span className="bg-[#0BB755] p-2 rounded-lg">
              <EmailOutlinedIcon
                sx={{
                  color: "white",
                  fontSize: "25px",
                }}
              />
            </span>
            <h1 className="font-bold">Email</h1>
          </div>
          <TextField
            id="standard-basic"
            type="email"
            variant="standard"
            fullWidth
            value={email}
            onChange={handleEmailChange}
          />
          <div className="flex items-center space-x-4 my-2">
            <span className="bg-[#0BB755] p-2 rounded-lg">
              <MessageOutlinedIcon
                sx={{
                  color: "white",
                  fontSize: "25px",
                }}
              />
            </span>
            <h1 className="font-bold">Message</h1>
          </div>
          <TextField
            id="standard-basic"
            type="text"
            variant="standard"
            fullWidth
            value={name}
            onChange={handleNameChange}
          />

          <div className="flex items-center  mt-2">
            <button
              type="submit"
              className={`${
                isSubmitted ? "bg-[#204945]" : " bg-[#0BB755]"
              }  px-10 py-2 cursor-pointer text-white rounded-[10px] boxshadow  mb-3`}
            >
              {isSubmitted ? "Booked" : "Book Now"}
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
              severity={
                emailError || phoneError || nameError || bookingDateError
                  ? "error"
                  : "success"
              }
              onClose={() => setShowAlert(false)}
            >
              {emailError || phoneError || nameError || bookingDateError
                ? "Please Check the form!"
                : "Booked successfully!"}
            </Alert>
          )}
        </form>
      </div>
    </div>
  );
}

export default Appoiment;
