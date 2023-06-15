import React, { Fragment } from "react";

import BestGear from "../../components/BestGear/BestGear";
import CategoryNavigation from "../../components/CategoryNavigation/CategoryNavigation";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav/Nav";
import { category } from "../../components/ProductCategory/availableProductCategory";
import CategoryItem from "../../components/ProductCategory/CategoryItem";

import Hero from "../../components/ProductCategory/Hero";

const SpeakerPage = () => {
  // import speaker from category
  const { speaker } = category;

  const width = window.innerWidth;

  return (
    <Fragment>
      <Nav />
      <Hero category={speaker[0].category} />
      {speaker.map((item, index) => (
        <CategoryItem
          classInfo={index % 2 === 1 ? "content-reverse" : ""}
          image={
            width < 767
              ? item.img.mobile
              : width > 767 && width < 1024
              ? item.img.tablet
              : item.img.desktop
          }
          newProduct={item.product === true ? "NEW PRODUCT" : ""}
          title={item.title}
          description={item.description}
          category={item.category}
          slug={item.slug}
          key={Math.random()}
        />
      ))}
      <CategoryNavigation />
      <BestGear />
      <Footer />
    </Fragment>
  );
};

export default SpeakerPage;

/* <section className={classes["content"]}>
        <div className={classes["img-speaker"]}>
          <img src={zx9Speakers} alt="speaker" />
        </div>
        <div className={classes["content-info"]}>
          <p className={classes["new-product"]}>NEW PRODUCT</p>
          <h1>ZX9 Speaker</h1>
          <p>
            Upgrade your sound system with the all new ZX9 active speaker. It’s
            a bookshelf speaker system that offers truly wireless connectivity
            -- creating new possibilities for more pleasing and practical audio
            setups.
          </p>
          <Link>
            <Button>SEE PRODUCT</Button>
          </Link>
        </div>
      </section> */
