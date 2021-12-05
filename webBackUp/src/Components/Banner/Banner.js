import classes from "./Banner.module.scss";
import { Parallax } from "react-parallax";

function Banner({ mainHeader, secondHeader, bgImage }) {
  const Container = () => (
    <Parallax
      bgImage={bgImage}
      bgImageAlt="the concert"
      strength={300}
      bgClassName={classes.background}
    >
      <div className={classes.content}>
        <div className={classes.gradiant} />
        <div className={classes.mainHeader}>{mainHeader}</div>
        <div className={classes.secondHeader}>{secondHeader}</div>
      </div>
    </Parallax>
  );
  return <Container />;
}
export default Banner;
