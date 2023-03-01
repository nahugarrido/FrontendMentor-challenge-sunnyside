import React from "react";
import arrow from "../../../assets/icons/icon-arrow-down.svg";
import classes from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <h1>WE ARE CREATIVES</h1>
        <a href="#">
          <img src={arrow} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Banner;
