import React, { useState } from "react";

import Nav from "../../components/Nav/Nav";
import CheckoutForm from "./CheckoutForm";

import classes from "./Checkout.module.css";
import Footer from "../../components/Footer/Footer";
import SuccessModal from "./successModal";
import GoBack from "../../components/GoBack/GoBack";

const CheckoutPage = () => {
  const [showModal, setShowModal] = useState(false);

  const showSuccessModalHandler = () => {
    setShowModal(true);
  };

  return (
    <>
      <section className={classes.checkout}>
        {" "}
        <Nav />
        <GoBack />
        <section className={classes.checkoutSummary}>
          <CheckoutForm onShowModal={showSuccessModalHandler} />
          {showModal && <SuccessModal />}
        </section>
        <Footer />
      </section>
    </>
  );
};

export default CheckoutPage;
