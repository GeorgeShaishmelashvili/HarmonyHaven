import React from "react";

import { useDispatch } from "react-redux";

import Button from "../../UI/Button";
import { cartAction } from "../../Store/cart-slice";
import classes from "./CartItem.module.css";

const CartItem = ({ data, nav, checkout, success }) => {
  const { id, image, title, price, quantity } = data;

  // const cartNumber = useSelector((state) => state.cartReducer.itemNumber);

  const dispatch = useDispatch();

  const increaseHandler = () => {
    dispatch(cartAction.addToCart({ id, image, title, price, quantity: 1 }));
  };

  const decreaseHandler = () => {
    dispatch(cartAction.removeItem({ id, image, title, price, quantity: 1 }));
  };

  return (
    <>
      <li className={classes.list}>
        <div className={classes.image}>
          {" "}
          <img src={image.desktop} alt="earphoen" />
        </div>

        <div className={classes.cartBody}>
          <p>{title}</p>
          <p>
            <span>$</span> {price}
          </p>
        </div>
        {nav && (
          <div className={classes.buttonContainer}>
            <Button onClick={decreaseHandler}> - </Button>
            <p>{quantity}</p>
            <Button onClick={increaseHandler}>+</Button>
          </div>
        )}

        {checkout && (
          <div className={classes["btn-checkout"]}>
            <p>x {quantity}</p>
          </div>
        )}
      </li>
    </>
  );
};

export default CartItem;
