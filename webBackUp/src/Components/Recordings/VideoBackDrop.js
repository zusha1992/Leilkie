import classes from "./VideoBackDrop.module.scss";

function VideoBackDrop({ closeBackDrop, activeUrl }) {
  return (
    <div className={classes.backDrop} onClick={closeBackDrop}>
      <iframe
        width="905"
        height="509"
        src={activeUrl}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default VideoBackDrop;
