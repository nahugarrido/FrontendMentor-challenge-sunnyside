import React from "react";
import { useState, useContext } from "react";
import classes from "./Navbar.module.css";
import logo from "../../assets/logo/logo.svg";
import icon from "../../assets/icons/icon-hamburger.svg";
import ScreenContext from "../../store/screen-context";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ctx = useContext(ScreenContext);
  console.log("isMobile Navbar:", ctx.isMobile);

  return (
    <>
      <div className={classes.navbar}>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <button
            className={classes["menu-button"]}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <img src={icon} alt="icon" />
          </button>
        </div>
      </div>
      {isOpen && ctx.isMobile && (
        <div className={classes["modal-navbar"]}>
          <div className={classes.triangle}></div>
          <div className={classes.content}>
            <ul>
              <li>About</li>
              <li>Services</li>
              <li>Projects</li>
              <li>
                <button className={classes["contact-button"]}>CONTACT</button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
