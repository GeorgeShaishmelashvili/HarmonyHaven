import React from "react";

import classes from "./FeatureItem.module.css";

const Feature = ({ data }) => {
  const { features, includes } = data;

  const newFeature = features.split("\n");
  return (
    <>
      <section className={classes.features}>
        <div className={classes.description}>
          <h2>FEATURES</h2>
          {newFeature.map((item, index) => (
            <p
              key={index}
              className={classes[`${index % 2 === 0 ? "" : "margin"}`]}
            >
              {item}
            </p>
          ))}
        </div>
        <div className={classes.box}>
          <h2>IN THE BOX</h2>
          {includes.map((item, index) => (
            <p key={index}>
              <span> {item.quantity}</span>
              {item.item}
            </p>
          ))}
        </div>
      </section>
    </>
  );
};

export default Feature;
