import React, { useState } from "react";

import Input from "../../UI/Input/Input";
import CheckoutDetails from "./CheckoutDetails";

import classes from "./CheckoutForm.module.css";

const CheckoutForm = (props) => {
  const [payment, setPayment] = useState("emoney");
  // RegEx for email validation
  const validEmail = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);

  const [userNameIsInvalid, setUserNameIsInvalid] = useState(null);
  const [emailIsInvalid, setEmailIsInvalid] = useState(null);
  const [phoneNumberIsInvalid, setPhoneNumberIsInvalid] = useState(null);
  const [addressIsInvalid, setAddressIsInvalid] = useState(null);
  const [zipcodeIsInvalid, setZipcodeIsInvalid] = useState(null);
  const [cityIsInvalid, setCityIsInvalid] = useState(null);
  const [countryIsInvalid, setCountryIsInvalid] = useState(null);

  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
    setUserNameIsInvalid(event.target.value.trim() === "");
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
    setEmailIsInvalid(!validEmail.test(event.target.value));
  };

  const phoneChangeHandler = (event) => {
    setPhoneNumber(event.target.value);
    setPhoneNumberIsInvalid(event.target.value.length < 9);
  };

  const addressChangeHandler = (event) => {
    setAddress(event.target.value);
    setAddressIsInvalid(event.target.value.trim() === "");
  };

  const zipcodeChangeHandler = (event) => {
    setZipcode(event.target.value);
    setZipcodeIsInvalid(event.target.value.trim() === "");
  };

  const cityChangeHandler = (event) => {
    setCity(event.target.value);
    setCityIsInvalid(event.target.value.trim() === "");
  };

  const countryChangeHandler = (event) => {
    setCountry(event.target.value);
    setCountryIsInvalid(event.target.value.trim() === "");
  };

  const radioChangeHandler = (event) => {
    setPayment(event.target.value);
  };

  const validateUsernameHandler = (event) => {
    setUserNameIsInvalid(event.target.value.trim() === "");
  };

  const validateEmailHandler = (event) => {
    if (event.target.value.trim() === "") {
      setEmailIsInvalid(true);
      setEmailError("Email cannot be empty");
    } else if (!validEmail.test(event.target.value)) {
      setEmailIsInvalid(true);
      setEmailError("Invalid Email");
    } else {
      setEmailIsInvalid(false);
    }
  };

  const validatePhoneHandler = (event) => {
    if (event.target.value.trim() === "") {
      setPhoneNumberIsInvalid(true);
      setPhoneError("Phone cannot be empty");
    } else if (event.target.value.length < 9) {
      setPhoneNumberIsInvalid(true);
      setPhoneError("Minimum required length is 9");
    } else {
      setPhoneNumberIsInvalid(false);
    }
  };

  const validateAddressHandler = (event) => {
    setAddressIsInvalid(event.target.value.trim() === "");
  };

  const validateZipcodeHandler = (event) => {
    setZipcodeIsInvalid(event.target.value.trim() === "");
  };

  const validateCityHandler = (event) => {
    setCityIsInvalid(event.target.value.trim() === "");
  };

  const validateCountryHandler = (event) => {
    setCountryIsInvalid(event.target.value.trim() === "");
  };

  const submitHandler = (event) => {
    event.preventDefault();

    setUserNameIsInvalid(userName.trim() === "");
    setEmailIsInvalid(email.trim() === "" || !validEmail.test(email));
    setPhoneNumberIsInvalid(phoneNumber.trim() === "" || phoneNumber.length < 9);
    setAddressIsInvalid(address.trim() === "");
    setZipcodeIsInvalid(zipcode.trim() === "");
    setCityIsInvalid(city.trim() === "");
    setCountryIsInvalid(country.trim() === "");

    if (
      !userNameIsInvalid &&
      !emailIsInvalid &&
      !phoneNumberIsInvalid &&
      !addressIsInvalid &&
      !zipcodeIsInvalid &&
      !cityIsInvalid &&
      !countryIsInvalid
    ) {
      setFormIsValid(true);
      props.onShowModal(formIsValid);
    } else {
      setFormIsValid(false);
    }
  };

  return (
    <>
      <form onSubmit={submitHandler} className={classes["checkout-form"]}>
        <h1>CHECKOUT</h1>

        <div className={classes.billing}>
          <h6>BILLING DETAILS</h6>
          <div className={classes["form-row"]}>
            <Input
              type="text"
              label="Name"
              placeholder="George Shaishmelashvili"
              value={userName}
              onChange={userNameChangeHandler}
              onBlur={validateUsernameHandler}
              valueIsInvalid={userNameIsInvalid}
              errorText="Name cannot be empty"
            />
            <Input
              type="email"
              label="Email Address"
              placeholder="g.shaishmela@gmail.com"
              value={email}
              onChange={emailChangeHandler}
              onBlur={validateEmailHandler}
              valueIsInvalid={emailIsInvalid}
              errorText={emailError}
            />
          </div>
          <Input
            type="phone"
            placeholder="+995-574-068-569"
            label="Phone Number"
            value={phoneNumber}
            onChange={phoneChangeHandler}
            onBlur={validatePhoneHandler}
            valueIsInvalid={phoneNumberIsInvalid}
            errorText={phoneError}
          />
        </div>

        <div className={classes.shipping}>
          <h6>SHIPPING INFO</h6>
          <Input
            placeholder="Vasadze Street"
            label="Address"
            value={address}
            onChange={addressChangeHandler}
            onBlur={validateAddressHandler}
            valueIsInvalid={addressIsInvalid}
            errorText="Address cannot be empty"
          />
          <div className={classes["form-row"]}>
            <Input
              placeholder="0179"
              label="Zip code"
              value={zipcode}
              onChange={zipcodeChangeHandler}
              onBlur={validateZipcodeHandler}
              valueIsInvalid={zipcodeIsInvalid}
              errorText="Zip code cannot be empty"
            />
            <Input
              placeholder="Tbilisi"
              label="City"
              value={city}
              onChange={cityChangeHandler}
              onBlur={validateCityHandler}
              valueIsInvalid={cityIsInvalid}
              errorText="City cannot be empty"
            />
          </div>
          <div className={classes["form-row"]}>
            <Input
              placeholder="Georgia"
              label="Country"
              value={country}
              onChange={countryChangeHandler}
              onBlur={validateCountryHandler}
              valueIsInvalid={countryIsInvalid}
              errorText="Country cannot be empty"
            />
            <div style={{ height: "8px" }} className={classes.special}></div>
          </div>
        </div>

        <div className={classes.payment}>
          <h6>PAAYMENT DETAILS</h6>
          <div className={classes["form-row"]}>
            <div>
              <p>Payment Method</p>
            </div>
            <div className={classes.radio}>
              <div className={classes["radio-btn"]}>
                <input
                  id="emoney"
                  type="radio"
                  name="paymentMethod"
                  value="emoney"
                  onChange={radioChangeHandler}
                  checked={payment === "emoney"}
                />
                <label htmlFor="emoney" data-check={payment === "emoney"}>
                  e-money
                </label>
              </div>
              <div className={classes["radio-btn"]}>
                <input
                  id="ecash"
                  type="radio"
                  name="paymentMethod"
                  value="ecash"
                  onChange={radioChangeHandler}
                  checked={payment === "ecash"}
                />
                <label htmlFor="ecash" data-check={payment === "ecash"}>
                  Cash on Delivery
                </label>
              </div>
            </div>
          </div>
        </div>
        <div>
          {payment === "emoney" ? (
            <div className={classes["form-row"]}>
              <Input label="e-money Number" placeholder="Enter e-money number" />
              <Input label="e-money pin" placeholder="Enter e-money pin" />
            </div>
          ) : (
            <p>
              The 'Cash on Delivery' option enables you to pay in cash when our
              delivery courier arrives at your residence. Just make sure your
              address is correct so that your order will not be cancelled.
            </p>
          )}
        </div>
      </form>
      <CheckoutDetails onSubmit={submitHandler} />
    </>
  );
};

export default CheckoutForm;
