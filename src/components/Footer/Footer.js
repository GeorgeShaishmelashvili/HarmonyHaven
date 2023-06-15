import React from "react";
import styled from "styled-components";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import classes from "./Footer.module.css";
import Logo from "../../Assets/icons/logo.svg";
import { Link } from "react-router-dom";

const Facebook = styled(FaFacebookSquare)`
  font-size: 2em;
  margin-right: 30px;
`;

const Twitter = styled(FaTwitter)`
  font-size: 2em;
  margin-right: 30px;
`;

const Instagram = styled(FaInstagram)`
  font-size: 2em;
  margin-right: 30px;
`;

const Email = styled(MdEmail)`
`;

const Footer = () => {
  const scrollUp = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:g.shaishmela@gmail.com";
  };

  return (
    <footer className={classes["footer"]}>
      <div className={classes["footer-left"]}>
        <img src={Logo} alt="logo" />
        <div className={classes["footer-link"]}>
          <Link to="/" onClick={scrollUp}>
            Home
          </Link>
          <Link to="/speaker" onClick={scrollUp}>
            Speaker
          </Link>
          <Link to="/headphone" onClick={scrollUp}>
            HeadPhone
          </Link>
          <Link to="/earphone" onClick={scrollUp}>
            Earphone
          </Link>
        </div>
      </div>
      <div>
        <div className={classes["footer-right"]}>
          <p>
            HarmonyHaven is an all-in-one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <p className={classes.mobile}>
            <span className={classes.email} onClick={handleEmailClick}>
              <Email /> g.shaishmela@gmail.com
            </span>
          </p>
          <div className={classes["footer-icons"]}>
            <Facebook />
            <Twitter />
            <Instagram />
          </div>
        </div>
        <p className={classes.desktop}>
          <span className={classes.email} onClick={handleEmailClick}>
            <Email /> g.shaishmela@gmail.com
          </span>
        </p>
      </div>
      <p className={classes["copyright"]}>
        &copy; 2023. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
