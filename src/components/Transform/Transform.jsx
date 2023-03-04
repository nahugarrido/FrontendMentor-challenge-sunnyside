import classes from "./Transform.module.css";
import transformMobile from "../../assets/mobile/image-transform.jpg";
import transformDesktop from "../../assets/desktop/image-transform.jpg";
import ScreenContext from "../../store/screen-context";
import { useContext } from "react";

const Transform = () => {
  const ctx = useContext(ScreenContext);
  return (
    <section className="wrapper-reverse">
      <div className="split-40">
        {ctx.isMobile ? (
          <img className="img" src={transformMobile}></img>
        ) : (
          <img className="img" src={transformDesktop}></img>
        )}
      </div>
      <div className="split-60">
        <div className="content-1">
          <h1>Transform your brand</h1>
          <p>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you
          </p>
          <button className={classes["transform-button"]}>LEARN MORE</button>
        </div>
      </div>
    </section>
  );
};

export default Transform;
