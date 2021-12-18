import React from "react";
import classes from "./Gallery.module.scss";
import "./Gallery.module.scss";
import "react-image-gallery/styles/css/image-gallery.css";

import Banner from "../Banner/Banner";

import ImageGallery from "react-image-gallery";
const data = require("./pictures.json").data;

const images = data.map(({ url }) => {
  return {
    original: url,
    thumbnail: url,
    thumbnailHeight: "120px",
    width: "58%",
  };
});

function Gallery({ isMobile }) {
  return (
    <div className={classes.wrapper}>
      <Banner
        bgImage="/pictures/leikie6.jpg"
        header="Gallery"
        isMobile={isMobile}
      />
      <ImageGallery items={images} lazyLoad={true} />;
    </div>
  );
}

export default Gallery;
