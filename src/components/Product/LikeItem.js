import React from "react";
import { Link } from "react-router-dom";
import Button from "../../UI/Button";

import classes from "./LikeItem.module.css";

const Likes = ({ data }) => {
  const { others, category } = data;
  const width = window.innerWidth;

  const scrollUp = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      <section className={classes.likes}>
        <h2>YOU MAY ALSO LIKE</h2>
        <div className={classes["likes-container"]}>
          {others.map((item, index) => {
            return (
              <div key={index} className={classes["likes-image"]}>
                {" "}
                <img
                  src={
                    width < 767
                      ? item.image.mobile
                      : width > 767 && width < 1023
                      ? item.image.tablet
                      : item.image.desktop
                  }
                  alt=""
                />
                <h3>{item.name}</h3>
                <Link to={`/${category}/${item.slug}`}>
                  {" "}
                  <Button onClick={scrollUp}>SEE PRODUCT</Button>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Likes;
