import Hero from "./Components/Hero/Hero";
import Nav from "./Components/Navbar/Nav";
import { Container } from "@mui/material";
import About from "./Components/About/About";
import Offer from "./Components/Offers/Offer";
import Different from "./Components/Different/Different";
import FAQS from "./Components/FAQS/FAQS";
import Appoiment from "./Components/Appiment/Appoiment";
import Footer from "./Components/Footer/Fo0ter";

function App() {
  return (
    <>
      <div className="  ">
        <div className="  " id="Home">
          <Container>
            <Nav />
            <Hero />
          </Container>
        </div>

        <div className="bg-[#0BB755] w-full h-[30px]  " />
        <Container className="">
          <div className="h-fit mobile:h-fit laptop:h-full " id="About">
            <About />
          </div>
          <div className="h-full " id="Services">
            <Offer />
          </div>
          <div className=" h-full">
            <Different />
          </div>
          <div className="h-full" id="FAQ'S">
            <FAQS />
          </div>
          <div>
            <Appoiment />
          </div>
          <div className="" id="Contact">
            <Footer />
          </div>
        </Container>
      </div>
    </>
  );
}

export default App;
