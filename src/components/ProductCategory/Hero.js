import React from "react";

import classes from "./Hero.module.css";

const Hero = ({ category }) => {
  return (
    <section className={classes.background}>
      <h1>{category}</h1>
    </section>
  );
};

export default Hero;
