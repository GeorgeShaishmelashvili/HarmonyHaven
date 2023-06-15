import React, { Fragment } from "react";

import { Link } from "react-router-dom";

import classes from "./CategoryItem.module.css";
import Button from "../../UI/Button";

const ProductCategory = (Props) => {
  return (
    <Fragment>
      <section
        className={`${classes[`${Props.classInfo}`]} ${classes.content}`}
      >
        <div className={classes["category-img"]}>
          <img src={Props.image} alt="speaker" />
        </div>

        <div className={classes["content-info"]}>
          <p className={classes["new-product"]}>{Props.newProduct}</p>
          <h1>{Props.title}</h1>
          <p>{Props.description}</p>
          <Link to={Props.slug}>
            {" "}
            <Button
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
            >
              {" "}
              SEE PRODUCT
            </Button>
          </Link>
        </div>
      </section>
    </Fragment>
  );
};

export default ProductCategory;
