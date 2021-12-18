import classes from "./landingPage.module.scss";
import { Route, Routes } from "react-router-dom";
import About from "../About/About";
import Recordings from "../Recordings/Recordings";
import ContactForm from "../ContactForm/ContactForm";
import Navigation from "../Navigation/Navigation";
import Home from "../Home/Home";
import Gallery from "../Gallery/Gallery";
import { useEffect, useState } from "react";
import Contact from "../Contact/Contact";

function LandingPage() {
  const [mouseClicked, setMouseClicked] = useState(false);
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < 1000 ? true : false
  );
  const [openCollapse, setOpenCollapse] = useState(false);
  function closeCollapse() {
    if (openCollapse) {
      setOpenCollapse(false);
    }
  }

  useEffect(() => {
    window.onresize = () => {
      window.innerWidth < 1000 ? setIsMobile(true) : setIsMobile(false);
    };
  }, []);

  return (
    <div className={classes.wrapper} onClick={closeCollapse}>
      <Navigation
        mouseClicked={mouseClicked}
        isMobile={isMobile}
        setOpenCollapse={setOpenCollapse}
        openCollapse={openCollapse}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              mouseClicked={mouseClicked}
              isMobile={isMobile}
              setMouseClicked={setMouseClicked}
            />
          }
        ></Route>
        <Route path="/About" element={<About isMobile={isMobile} />}></Route>
        <Route
          path="/Recordings"
          element={<Recordings isMobile={isMobile} />}
        ></Route>
        <Route
          path="/Gallery"
          element={<Gallery isMobile={isMobile} />}
        ></Route>
        <Route
          path="/Contact"
          element={<ContactForm isMobile={isMobile} />}
        ></Route>
      </Routes>
      <Contact isMobile={isMobile} />
    </div>
  );
}

export default LandingPage;
