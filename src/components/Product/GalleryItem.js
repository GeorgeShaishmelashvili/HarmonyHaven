import React from "react";
import classes from "./GalleryItem.module.css";

const GalleryItem = ({ data }) => {
  const { gallery } = data;
  const { first, second, third } = gallery;

  const width = window.innerWidth;
  return (
    <>
      <section className={classes.gallery}>
        <div className={classes["img-container"]}>
          <img
            className={classes["img-first"]}
            src={
              width < 767
                ? first.mobile
                : width > 767 && width < 1023
                ? first.tablet
                : first.desktop
            }
            alt="gallery"
          />
          <img
            className={classes["img-second"]}
            src={
              width < 767
                ? second.mobile
                : width > 767 && width < 1023
                ? second.tablet
                : second.desktop
            }
            alt="gallery"
          />
          <img
            className={classes["img-third"]}
            src={
              width < 767
                ? third.mobile
                : width > 767 && width < 1023
                ? third.tablet
                : third.desktop
            }
            alt="gallery"
          />
        </div>
      </section>
    </>
  );
};

export default GalleryItem;
