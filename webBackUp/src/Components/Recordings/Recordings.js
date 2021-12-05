import classes from "./recordings.module.scss";
import ReactPlayer from "react-player";
import Banner from "../Banner/Banner";
import VideoPreview from "./VideoPreview";
import VideoBackDrop from "./VideoBackDrop";
import { useRef, useState } from "react";

const videosData = [
  [
    { imageName: 1, url: "https://www.youtube.com/embed/VB932i5AEPM" },
    { imageName: 3, url: "https://www.youtube.com/embed/pmUs88HvuhM" },
    { imageName: 4, url: "https://www.youtube.com/embed/BacBZ_iWF-g" },
  ],
  [
    { imageName: 1, url: "https://www.youtube.com/embed/VB932i5AEPM" },
    { imageName: 2, url: "https://www.youtube.com/embed/VB932i5AEPM" },
    { imageName: 3, url: "https://www.youtube.com/embed/pmUs88HvuhM" },
  ],
  [
    { imageName: 2, url: "https://www.youtube.com/embed/VB932i5AEPM" },
    { imageName: 3, url: "https://www.youtube.com/embed/pmUs88HvuhM" },
    { imageName: 4, url: "https://www.youtube.com/embed/BacBZ_iWF-g" },
  ],
];

function Recordings() {
  const [backDrop, setBackDrop] = useState(false);
  const [activeUrl, setActiveUrl] = useState("");

  function previewClicked(url) {
    setBackDrop(true);
    setActiveUrl(url);
  }

  function closeBackDrop() {
    setBackDrop(false);
  }

  let galleryElement = videosData.map((row) => {
    return (
      <div className={classes.row1}>
        {row.map(({ imageName, url }) => {
          return (
            <VideoPreview
              imageName={"/pictures/" + imageName + ".jpeg"}
              url={url}
              previewClicked={previewClicked}
            />
          );
        })}
      </div>
    );
  });

  return (
    <div className={classes.recordings}>
      <Banner
        bgImage="/pictures/recordings.jpg"
        mainHeader="Recordings"
        secondHeader=""
      />
      <div className={classes.textWrapper}>{galleryElement}</div>
      {backDrop ? (
        <VideoBackDrop closeBackDrop={closeBackDrop} activeUrl={activeUrl} />
      ) : null}
    </div>
  );
}

export default Recordings;

/* <div className={classes.row1}>
<VideoPreview url="/pictures/2.jpeg" />
<VideoPreview url="/pictures/4.jpeg" />
<VideoPreview url="/pictures/1.jpeg" />
{/* <ReactPlayer
  url="https://youtu.be/4q-GHriLCT8"
  width={250}
  height={200}
/>
<ReactPlayer
  url="https://www.youtube.com/watch?v=TNCGEwPfliY"
  width={250}
  height={200}
/>
<ReactPlayer
  url="https://www.youtube.com/watch?v=TNCGEwPfliY"
  width={250}
  height={200}
/> */
