import classes from "./Navigation.module.scss";
import { Link, Outlet } from "react-router-dom";
import NavigationButton from "./NavigationButton";
import { useEffect, useRef, useState } from "react";
import Collapse from "./Collapse";

function Navigation({ mouseClicked, isMobile, setOpenCollapse, openCollapse }) {
  const [activeId, setActiveId] = useState(-1);
  const nevRef = useRef();

  useEffect(() => {
    if (mouseClicked) {
      nevRef.current.style.top = 0;
    }
  }, [mouseClicked]);

  let sideNav = isMobile ? <Collapse isCollapseOpen={openCollapse} /> : null;

  let dynamicNavigation = isMobile ? (
    <div
      className={classes.collapseButton}
      style={{
        maskImage: "url('/Icons/menu2.png')",
        webkitMaskImage: "url('/Icons/menu2.png')",
      }}
      onClick={() => setOpenCollapse(true)}
    ></div>
  ) : (
    <div className={classes.horizontalNavigation}>
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
      <NavigationButton
        to="/Contact"
        text="CONTACT"
        id={4}
        activeId={activeId}
        setActiveId={setActiveId}
      />
    </div>
  );

  return (
    <div className={classes.navigationWrapper} ref={nevRef}>
      {dynamicNavigation}
      <Link to="/">
        <div className={classes.logo}>Leikie Glick</div>
      </Link>
      {sideNav}
      <Outlet />
    </div>
  );
}
export default Navigation;
