import React from "react";
import { Link } from "react-router-dom";
import { AiFillCaretRight } from "react-icons/ai";
import { BsHeadphones, BsSpeaker, BsHeadset, BsHouseDoor } from "react-icons/bs";

import classes from "./mobileNav.module.css";

function Navs() {
  return (
    <>
      <Link className={classes.mobileCategoryContainer} to="/">
        <div className={classes.mobileimage}>
          {/* Remove the div with the class "icon" */}
        </div>
        <div className={classes.mobileCategoryInfo}>
          <h3>
            <BsHouseDoor /> Home
          </h3>
          <div className={classes.mobileCategorySection}>
            <p>
              Go to Home
              <span>
                <AiFillCaretRight />
              </span>
            </p>
          </div>
        </div>
      </Link>

      <Link className={classes.mobileCategoryContainer} to="/headphone">
        <div className={classes.mobileimage}></div>
        <div className={classes.mobileCategoryInfo}>
          <h3>
            <BsHeadset /> Headphones
          </h3>
          <div className={classes.mobileCategorySection}>
            <p>
              Shop now
              <span>
                <AiFillCaretRight />
              </span>
            </p>
          </div>
        </div>
      </Link>

      <Link className={classes.mobileCategoryContainer} to="/speaker">
        <div className={classes.mobileimage}></div>
        <div className={classes.mobileCategoryInfo}>
          <h3>
            <BsSpeaker /> Speakers
          </h3>
          <div className={classes.mobileCategorySection}>
            <p>
              Shop now
              <span>
                <AiFillCaretRight />
              </span>
            </p>
          </div>
        </div>
      </Link>

      <Link className={classes.mobileCategoryContainer} to="/earphone">
        <div className={classes.mobileimage}></div>
        <div className={classes.mobileCategoryInfo}>
          <h3>
            <BsHeadphones /> Earphones
          </h3>
          <div className={classes.mobileCategorySection}>
            <p>
              Shop now
              <span>
                <AiFillCaretRight />
              </span>
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Navs;
