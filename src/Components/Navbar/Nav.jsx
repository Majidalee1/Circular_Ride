import { Button, Drawer, List, ListItem } from "@mui/material";

import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

function Nav() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (isOpen) => {
    setDrawerOpen(isOpen);
  };
  return (
    <>
      <div className=" flex items-center justify-between">
        <div className="">
          <img
            src="/logo.png"
            alt=""
            className="w-[130px] h-[85px] mx-9 zero:mx-0 "
          />
        </div>
        <div className="flex items-center justify-between zero:hidden mobile:hidden">
          <div className="mr-16 ">
            <ul className="flex items-center justify-between">
              <li className="list">
                <a href="#Home">Home</a>
              </li>
              <li className="list">
                <a href="#About">About Us</a>
              </li>
              <li className="list">
                <a href="#Services">Services</a>
              </li>
              <li className="list">
                <a href="#FAQ'S">FAQS</a>
              </li>
              <li className="list">
                <a href="#Contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className=" ">
            <Button
              sx={{
                mx: 1,
                bgcolor: "#0BB755",
                fontWeight: "bold",
                p: 0,
                px: 2,
                py: "5px",
                color: "#fff",
                fontSize: "10px",
                borderSadius: "10px",
                boxShadow: "0px 5px 1px lightgreen",
                ":hover": {
                  backgroundColor: "#0BB710",
                },
              }}
            >
              Log In
            </Button>
          </div>
        </div>
        <div className=" laptop:hidden lcd:hidden px-4 mobile:px-0 zero:px-0">
          <MenuIcon
            onClick={() => toggleDrawer(true)}
            sx={{
              fontSize: "40px",
            }}
          />
        </div>

        <div className="laptop:hidden lcd:hidden zero:hidden mobile:hidden">
          <Drawer
            anchor="left"
            open={isDrawerOpen}
            onClose={() => toggleDrawer(false)}
          >
            <div role="presentation" onClick={() => toggleDrawer(false)}>
              <List
                sx={{
                  width: 150,
                  height: "100vh",
                  backgroundColor: "#fff",

                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ListItem button href="#Home">
                  <a href="#Home">Home</a>
                </ListItem>
                <ListItem button href="#About">
                  <a href="#About">About</a>
                </ListItem>
                <ListItem button>
                  <a href="#Services">Services</a>
                </ListItem>
                <ListItem button>
                  <a href="#FAQ'S">FAQS</a>
                </ListItem>
                <ListItem button>
                  <a href="#Contact">Contact</a>
                </ListItem>

                <span className="relative top-[27%] w-full">
                  <Button
                    sx={{
                      mx: 1,
                      bgcolor: "#0BB755",
                      fontWeight: "bold",
                      p: 0,
                      width: "90%",
                      px: 2,
                      py: 1,
                      color: "#fff",
                      fontSize: "10px",
                      ":hover": {
                        backgroundColor: "#0BB710",
                      },
                    }}
                  >
                    Log In
                  </Button>
                </span>
              </List>
            </div>
          </Drawer>
        </div>
      </div>
      <div className="w-[230px] text-center zero:w-full">
        <h1 className="text-xs">
          Bringing an Optimized and Integrated Transportation to Life!
        </h1>
      </div>
      <div>
        <img
          src="/starg.png"
          alt=""
          className="h-[30px] w-[30px] zero:hidden mobile:hidden
          rotate-[1deg] absolute top-[15%] left-[45%]
           "
        />
      </div>
    </>
  );
}

export default Nav;
