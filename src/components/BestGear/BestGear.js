import React from "react";

import classes from "./BestGear.module.css";

import best_gear from "../../Assets/shared/desktop/image-best-gear.jpg";

const BestGear = () => {
  return (
    <>
      <section className={classes["best-gear"]}>
        <div className={classes["best-gear-content"]}>
          <h1>
            BRINGING YOU THE <span>BEST</span> AUDIO GEAR
          </h1>
          <p>
            Located at the heart of New York City, HarmonyHaven is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <div className={classes["best-gear-image"]}>
          <img src={best_gear} alt="best-gear" />
        </div>
      </section>
    </>
  );
};

export default BestGear;
