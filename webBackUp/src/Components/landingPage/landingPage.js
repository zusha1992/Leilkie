import classes from "./landingPage.module.scss";
import { Route, Routes } from "react-router-dom";
import About from "../About/About";
import Recordings from "../Recordings/Recordings";
import Schedule from "../Schedule/Schedule";
import Navigation from "../Navigation/Navigation";
import Home from "../Home/Home";
import Gallery from "../Gallery/Gallery";
import { useRef, useState } from "react";

function LandingPage() {
  const [mouseClicked, setMouseClicked] = useState(false);
  // const startButtonRef = useRef();
  const curtain1Ref = useRef();
  const curtain2Ref = useRef();
  function onCurtainsClick() {
    setMouseClicked(true);
    curtain1Ref.current.style.width = 0;
    curtain2Ref.current.style.width = 0;
  }

  return (
    <div className={classes.wrapper}>
      <Navigation mouseClicked={mouseClicked} />

      <div
        className={classes.curtain1}
        ref={curtain1Ref}
        onClick={onCurtainsClick}
      ></div>
      <div
        className={classes.curtain2}
        ref={curtain2Ref}
        onClick={onCurtainsClick}
      ></div>

      <Routes>
        <Route path="/" element={<Home mouseClicked={mouseClicked} />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Recordings" element={<Recordings />}></Route>
        <Route path="/Schedule" element={<Schedule />}></Route>
        <Route path="/Gallery" element={<Gallery />}></Route>
      </Routes>
    </div>
  );
}

export default LandingPage;
