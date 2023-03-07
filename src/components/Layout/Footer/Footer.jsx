import customlogo from "../../../assets/logo/custom-logo.svg";
import facebookIcon from "../../../assets/icons/icon-facebook.svg";
import instagramIcon from "../../../assets/icons/icon-instagram.svg";
import twitterIcon from "../../../assets/icons/icon-twitter.svg";
import pinterestIcon from "../../../assets/icons/icon-pinterest.svg";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <section className={classes.footer}>
      <div className={classes.logo}>
        <img src={customlogo} alt="logo" />
      </div>
      <div>
        <ul className={classes.list}>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <img src={facebookIcon} alt="facebook icon" />
          </li>
          <li>
            <img src={instagramIcon} alt="instagram icon" />
          </li>
          <li>
            <img src={twitterIcon} alt="twitter icon" />
          </li>
          <li>
            <img src={pinterestIcon} alt="pinterest icon" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
