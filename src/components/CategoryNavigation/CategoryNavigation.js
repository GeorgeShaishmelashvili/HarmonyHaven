import React from "react";
import { Link } from "react-router-dom";

import classes from "./CategoryNavigation.module.css";

import earphone from "../../Assets/shared/desktop/image-earphones.png";
import speaker from "../../Assets/shared/desktop/image-speakers.png";
import headphone from "../../Assets/shared/desktop/image-headphones.png";
import arrow from "../../Assets/shared/desktop/icon-arrow-right.svg";

const CategoryNavigation = () => {
  return (
    <div className={classes.container}>
      <Link to="/headphone" className={classes.card}>
        <img src={headphone} alt="headphone" className={classes.image} />
        <div className={classes.overlay}>
          <h2 className={classes.title}>HEADPHONES</h2>
          <p className={classes.shop}>
            SHOP <img src={arrow} alt="arrow" className={classes.arrow} />
          </p>
        </div>
      </Link>

      <Link to="/speaker" className={classes.card}>
        <img src={speaker} alt="speaker" className={classes.image} />
        <div className={classes.overlay}>
          <h2 className={classes.title}>SPEAKERS</h2>
          <p className={classes.shop}>
            SHOP <img src={arrow} alt="arrow" className={classes.arrow} />
          </p>
        </div>
      </Link>

      <Link to="/earphone" className={classes.card}>
        <img src={earphone} alt="earphone" className={classes.image} />
        <div className={classes.overlay}>
          <h2 className={classes.title}>EARPHONES</h2>
          <p className={classes.shop}>
            SHOP <img src={arrow} alt="arrow" className={classes.arrow} />
          </p>
        </div>
      </Link>
    </div>
  );
};

export default CategoryNavigation;
