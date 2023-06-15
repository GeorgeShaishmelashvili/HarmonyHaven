import React, { Fragment } from "react";
import styled from "styled-components";

const ButtonUI = styled.button`
  background-color: #d87d4a;
  border: none;
  color: white;
  cursor: pointer;
  font-weight: 700;
  padding: 1rem;
`;

const Button = (Props) => {
  return (
    <Fragment>
      <ButtonUI
        onClick={Props.onClick}
        type={Props.type}
        className={`${Props.className}`}
      >
        {Props.children}
      </ButtonUI>
    </Fragment>
  );
};

export default Button;
