import classes from "./About.module.scss";
import Banner from "../Banner/Banner";
const data = require("./About.json");

function About({ isMobile }) {
  return (
    <div className={classes.home}>
      <Banner
        bgImage="/pictures/Leikie3.jpg"
        header="About"
        isMobile={isMobile}
      />
      <div
        className={classes.textWrapper}
        style={{ flexDirection: isMobile ? "column" : "row" }}
      >
        <div
          className={classes.text}
          style={{ width: isMobile ? "85vw" : "22vw" }}
        >
          {data.col0}
        </div>
        <div
          className={classes.text}
          style={{ width: isMobile ? "85vw" : "22vw" }}
        >
          {data.col1}
        </div>
        <div
          className={classes.text}
          style={{ width: isMobile ? "85vw" : "22vw" }}
        >
          {data.col2}
        </div>
      </div>
    </div>
  );
}

export default About;
