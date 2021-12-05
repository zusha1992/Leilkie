import classes from "./About.module.scss";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import NoamLogo from "../NoamLogo/NoamLogo";
const data = require("./About.json");

function About() {
  return (
    <div className={classes.home}>
      <Banner
        bgImage="/pictures/Leikie3.jpg"
        mainHeader="Leikie Glick"
        secondHeader="Violist"
      />
      <div className={classes.textWrapper}>
        <div className={classes.text}>{data.col0}</div>
        <div className={classes.text}>{data.col1}</div>
        <div className={classes.text}>{data.col2}</div>
      </div>
      <div className={classes.contactBackDrop}>
        <NoamLogo />
        <Contact />
      </div>
    </div>
  );
}

export default About;
