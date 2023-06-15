import React, { Fragment } from "react";

import BestGear from "../../components/BestGear/BestGear";
import CategoryNavigation from "../../components/CategoryNavigation/CategoryNavigation";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav/Nav";
import { category } from "../../components/ProductCategory/availableProductCategory";
import CategoryItem from "../../components/ProductCategory/CategoryItem";
import Hero from "../../components/ProductCategory/Hero";

const HeadphonePage = () => {
  // import headphone from category
  const { headphone } = category;

  const width = window.innerWidth;

  return (
    <Fragment>
      <Nav />
      <Hero category={headphone[0].category} />

      {headphone.map((item, index) => (
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

export default HeadphonePage;
