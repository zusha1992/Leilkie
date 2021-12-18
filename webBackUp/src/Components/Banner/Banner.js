import classes from "./Banner.module.scss";
import { useEffect, useRef, useState } from "react";

function Banner({ header, bgImage, isMobile }) {
  const [offSet, setOffSet] = useState(0);
  const imageRef = useRef();
  const headerRef = useRef();
  useEffect(() => {
    window.onscroll = () => {
      setOffSet(Math.floor(window.pageYOffset));
    };
    imageRef.current.style.opacity = 1;
    setTimeout(() => {
      headerRef.current.style.opacity = 0.7;
    }, 500);
  }, []);

  return (
    <div
      className={classes.backgroundImage}
      ref={imageRef}
      style={{
        backgroundImage: "url(" + bgImage + ")",
        backgroundPositionY: (offSet / 400) * 40 + "%",
        backgroundPositionX: isMobile ? "40%" : 0,

        // height: isMobile ? "100vh" : "130vh",
      }}
    >
      <div className={classes.header} ref={headerRef}>
        {header}
      </div>
    </div>
  );
}
export default Banner;

// const Container = () => (
//   <Parallax
//     bgImage={bgImage}
//     bgImageAlt="the concert"
//     strength={300}
//     bgClassName={classes.background}
//   >
//     <div className={classes.content}>
//       <div className={classes.gradiant} />
//       <div className={classes.mainHeader}>{mainHeader}</div>
//       <div className={classes.secondHeader}>{secondHeader}</div>
//     </div>
//   </Parallax>
// );
// return <Container />;
