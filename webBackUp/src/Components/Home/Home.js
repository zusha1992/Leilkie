import { useState, useRef, useEffect } from "react";
import classes from "./Home.module.scss";

const videosList = [
  "/homeVideo.mp4",
  "/homeVideo2.mp4",
  "/homeVideo3.mp4",
  "/homeVideo4.mp4",
];

function Home({ mouseClicked }) {
  const [video, setVideo] = useState(0);
  const [isPlay, setIsPlay] = useState(true);

  const videoRef = useRef();

  useEffect(() => {
    if (video >= 0) {
      videoRef.current.load();
      // setTimeout(() => videoRef.current.play(), 300);
    }
  }, [video]);

  useEffect(() => {
    if (mouseClicked) {
      videoRef.current.play();
    }
  }, [mouseClicked]);

  function stopOrPlay() {
    if (isPlay) {
      videoRef.current.pause();
      setIsPlay(false);
    } else {
      videoRef.current.play();
      setIsPlay(true);
    }
  }

  function playVideo() {
    if (isPlay) {
      videoRef.current.play();
    }
  }

  function nextVideo() {
    setVideo((video + 1) % videosList.length);
  }

  function previousVideo() {
    setVideo((video - 1 + videosList.length) % videosList.length);
  }
  let playPause =
    isPlay === true ? "url('/Icons/pause.png')" : "url('/Icons/play.png')";
  return (
    <div className={classes.home}>
      <video
        className={classes.video}
        ref={videoRef}
        onLoadedData={playVideo}
        // autoPlay={!mouseClicked}
        loop
      >
        <source src={videosList[video]} type="video/mp4" />
      </video>
      <div className={classes.background}></div>
      <div
        className={classes.button1}
        onClick={previousVideo}
        style={{
          maskImage: "url('/Icons/newLeft.png')",
          webkitMaskImage: "url('/Icons/newLeft.png')",
        }}
      ></div>
      <div
        className={classes.button2}
        onClick={nextVideo}
        style={{
          maskImage: "url('/Icons/newRight.png')",
          webkitMaskImage: "url('/Icons/newRight.png')",
        }}
      ></div>
      <div
        className={classes.playPause}
        onClick={stopOrPlay}
        style={{
          maskImage: playPause,
          webkitMaskImage: playPause,
        }}
      ></div>
    </div>
  );
}

export default Home;
