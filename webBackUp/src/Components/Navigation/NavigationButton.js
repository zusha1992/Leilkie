import classes from "./NavigationButton.module.scss";
import { Link } from "react-router-dom";

function NavigationButton({ to, text, id, activeId, setActiveId }) {
  const buttonClass =
    id === activeId || activeId === -1
      ? `${classes.active} ${classes.button}`
      : `${classes.hidden} ${classes.button}`;

  const logoClass =
    id !== activeId
      ? `${classes.violinIcon} ${classes.transparent} `
      : `${classes.violinIcon} ${classes.active}`;
  console.log(activeId);
  return (
    <div className={classes.buttonWrapper}>
      <div
        className={logoClass}
        style={{
          maskImage: "url('/Icons/gclefIcon.png')",
          webkitMaskImage: "url('/Icons/gclefIcon.png')",
        }}
      ></div>
      <div
        className={buttonClass}
        onMouseEnter={() => setActiveId(id)}
        onMouseLeave={() => setActiveId(-2)}
      >
        <Link to={to}>{text}</Link>
      </div>
    </div>
  );
}

export default NavigationButton;
