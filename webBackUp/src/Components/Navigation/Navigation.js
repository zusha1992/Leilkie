import classes from "./Navigation.module.scss";
import { Link } from "react-router-dom";
import NavigationButton from "./NavigationButton";
import { useEffect, useRef, useState } from "react";

function Navigation({ mouseClicked }) {
  const [activeId, setActiveId] = useState(-1);
  // const [activeContactId, setActiveContactId] = useState(0);
  const nevRef = useRef();

  useEffect(() => {
    if (mouseClicked) {
      nevRef.current.style.top = 0;
    }
  }, [mouseClicked]);

  return (
    <div className={classes.navigationWrapper} ref={nevRef}>
      <div
        className={classes.navigation}
        onMouseEnter={() => setActiveId(-2)}
        onMouseOut={() => setActiveId(-1)}
      >
        <NavigationButton
          to="/"
          text="HOME"
          id={0}
          activeId={activeId}
          setActiveId={setActiveId}
        />
        <NavigationButton
          to="/About"
          text="ABOUT"
          id={1}
          activeId={activeId}
          setActiveId={setActiveId}
        />
        <NavigationButton
          to="/Gallery"
          text="GALLERY"
          id={5}
          activeId={activeId}
          setActiveId={setActiveId}
        />
        <NavigationButton
          to="/Schedule"
          text="SCHEDULE"
          id={2}
          activeId={activeId}
          setActiveId={setActiveId}
        />
        <NavigationButton
          to="/Recordings"
          text="RECORDINGS"
          id={3}
          activeId={activeId}
          setActiveId={setActiveId}
        />
      </div>
      <Link to="/">
        <div className={classes.logo}>Leikie Glick</div>
      </Link>
    </div>
  );
}
export default Navigation;
