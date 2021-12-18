import classes from "./Collapse.module.scss";
import NavigationButton from "./NavigationButton";
import { useState } from "react";

function Collapse({ isCollapseOpen }) {
  const [activeId, setActiveId] = useState(-1);
  return (
    <div
      className={classes.collapse}
      style={{ right: isCollapseOpen ? 0 : "-100%" }}
    >
      <div className={classes.innerWrapper}>
        <NavigationButton
          to="/"
          text="HOME"
          id={0}
          activeId={activeId}
          setActiveId={setActiveId}
        />
        <hr className={classes.underLine} />
        <NavigationButton
          to="/About"
          text="ABOUT"
          id={1}
          activeId={activeId}
          setActiveId={setActiveId}
        />
        <hr className={classes.underLine} />
        <NavigationButton
          to="/Gallery"
          text="GALLERY"
          id={2}
          activeId={activeId}
          setActiveId={setActiveId}
        />
        <hr className={classes.underLine} />
        <NavigationButton
          to="/Recordings"
          text="RECORDINGS"
          id={3}
          activeId={activeId}
          setActiveId={setActiveId}
        />
        <hr className={classes.underLine} />
        <NavigationButton
          to="/Contact"
          text="CONTACT"
          id={4}
          activeId={activeId}
          setActiveId={setActiveId}
        />
      </div>
    </div>
  );
}
export default Collapse;
