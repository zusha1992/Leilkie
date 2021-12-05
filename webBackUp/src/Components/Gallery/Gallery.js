import classes from "./Gallery.module.scss";
import PhotoGallery from "react-photo-gallery";
import { useState, useCallback } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
const data = require("./pictures.json").data;

const photos = data.map(({ url, width, height }) => {
  return { src: url, width: width, height: height };
});

function Gallery() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  // const [showPicture, setShowPicture] = useState(false);

  // function opemImage() {
  //   console.log("qqqqq");
  //   setShowPicture(!showPicture);
  // }
  // let switchDiv = !showPicture ? (
  //   <div className={classes.galleryWrapper}>
  //     <PhotoGallery
  //       photos={photos}
  //       margin={2}
  //       direction="row"
  //       onClick={opemImage}
  //     />
  //   </div>
  // ) : (
  //   <div className={classes.galleryWrapper}>
  //     <Image showPicture={showPicture} openImage={opemImage} />
  //   </div>
  // );

  return (
    <div className={classes.pageBackground}>
      <div className={classes.galleryWrapper}>
        <PhotoGallery photos={photos} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map((x) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
    </div>
  );
}

export default Gallery;
