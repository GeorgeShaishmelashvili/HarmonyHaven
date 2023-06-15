import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../../components/Cart.js/CartItem";
import { cartAction } from "../../Store/cart-slice";
import Button from "../../UI/Button";

import classes from "./successModal.module.css";

const SuccessModal = () => {
  const dispatch = useDispatch();
  const grandTotal = useSelector((state) => state.cartReducer.grandTotal);

  const cartProduct = useSelector((state) => state.cartReducer.items);

  const resetCartHandler = () => {
    dispatch(cartAction.removeAllItems());
  };
  return (
    <>
      <section className={classes.successBackdrop}>
        <section className={classes.successFlex}>
          {" "}
          <section className={classes.successModal}>
            <h3>Thank you for your order!</h3>
            <p>You will receive a confirmation email shortly.</p>
            <div className={classes.itemFlex}>
              <div className={classes.item}>
                {cartProduct.map((item) => (
                  <CartItem
                    key={item.id}
                    data={item}
                    checkout={true}
                    success={true}
                  />
                ))}
              </div>
              <div className={classes.grandTotal}>
                <p>Grand Total</p>
                <p>$ {grandTotal}</p>
              </div>
            </div>
            <Link to="/">
              <Button onClick={resetCartHandler}>Back Home</Button>
            </Link>
          </section>
        </section>
      </section>
    </>
  );
};

export default SuccessModal;
