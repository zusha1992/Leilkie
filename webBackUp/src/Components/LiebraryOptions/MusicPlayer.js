import ReactAudioPlayer from "react-audio-player";

import classes from "./MusicPlayer.module.scss";

function MusicPlayer() {
  return (
    <div className={classes.wrapper}>
      <ReactAudioPlayer src="/homeVideo.mp4" autoPlay controls />

      {/* <div className={classes.icons}></div>
      <div className={classes.text}></div> */}
    </div>
  );
}

export default MusicPlayer;
