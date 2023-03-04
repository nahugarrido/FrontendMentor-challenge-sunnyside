import React from "react";
import classes from "./TestimonialCard.module.css";

const TestimonialCard = (props) => {
  return (
    <div className={classes["testimonial-card"]}>
      <div className={classes["img-container"]}>
        <img
          className={classes["img-inside"]}
          src={props.img}
          alt="profile-picture"
        />
      </div>

      <p className={classes.quote}>{props.quote}</p>
      <span className={classes.name}>{props.name}</span>
      <span className={classes["work-title"]}>{props.title}</span>
    </div>
  );
};

export default TestimonialCard;
