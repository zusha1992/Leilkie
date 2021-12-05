import { useRef } from "react";
import classes from "./VideoPreview.module.scss";

function VideoPreview({ imageName, url, previewClicked }) {
  const iconRef = useRef();

  function increaseOpacity() {
    iconRef.current.style.opacity = 1;
  }
  function decreaseOpacity() {
    iconRef.current.style.opacity = 0.5;
  }

  return (
    <div className={classes.wrapper} onClick={() => previewClicked(url)}>
      <div
        onMouseOver={increaseOpacity}
        onMouseOut={decreaseOpacity}
        className={classes.image}
        style={{ backgroundImage: "url(" + imageName + ")" }}
      >
        <div
          ref={iconRef}
          className={classes.icon}
          style={{
            maskImage: "url('/Icons/play.png')",
            webkitMaskImage: "url('/Icons/play.png')",
          }}
        ></div>
      </div>
    </div>
  );
}

export default VideoPreview;
