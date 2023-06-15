import React from "react";
import classes from "./Cart.module.css";
import Button from "../../UI/Button";
import CartItem from "./CartItem";
import Modal from "../../UI/Modal/Modal";
import { useSelector, useDispatch } from "react-redux";
import { cartAction } from "../../Store/cart-slice";
import { Link } from "react-router-dom";
import { uiAction } from "../../Store/ui-slice";

const Cart = () => {
  const dispatch = useDispatch();
  //get cart data from reducer
  const cartProduct = useSelector((state) => state.cartReducer.items);
  const totalAmount = useSelector((state) => state.cartReducer.totalAmount);

  const removeAllItemHandler = () => {
    dispatch(cartAction.removeAllItems());
  };

  const closeCartHandler = () => {
    dispatch(uiAction.toggleCart());
  };

  return (
    <>
      <Modal>
        {cartProduct.length === 0 ? (
          <section className={classes["cart-container"]}>
            <p>Cart is empty</p>
          </section>
        ) : (
          <section className={classes["cart-container"]}>
            <div className={classes["cart-header"]}>
              <h3>
                Cart <span>({cartProduct.length})</span>
              </h3>{" "}
              <Button onClick={removeAllItemHandler} className={classes.button}>
                Remove all
              </Button>
            </div>
            {cartProduct.map((item) => (
              <CartItem data={item} nav={true} />
            ))}

            <div className={classes["cart-footer"]}>
              <h3>Total</h3>
              <p>{totalAmount}</p>
            </div>

            <Link to="/checkout">
              <Button onClick={closeCartHandler}>CHECKOUT</Button>
            </Link>
          </section>
        )}
      </Modal>
    </>
  );
};

export default Cart;
