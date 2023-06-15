import React from "react";

import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { uiAction } from "../../Store/ui-slice";

import classes from "./Modal.module.css";

const portalElement = document.getElementById("overlay");

const Modal = (Props) => {
  const dispatch = useDispatch();

  const closeCartHandler = () => {
    dispatch(uiAction.toggleCart());
  };

  const Backdrop = (Props) => {
    return <div onClick={Props.onClick} className={classes.backdrop}></div>;
  };

  const ModalOverlay = () => {
    return (
      <div className={`${classes.modal} ${Props.className}`}>
        {Props.children}
      </div>
    );
  };

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={closeCartHandler} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay className={Props.className}>
          {Props.chidren}
        </ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
