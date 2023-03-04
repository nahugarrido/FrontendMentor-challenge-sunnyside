import classes from "./Standout.module.css";
import standoutMobile from "../../assets/mobile/image-stand-out.jpg";
import standoutDesktop from "../../assets/desktop/image-stand-out.jpg";
import ScreenContext from "../../store/screen-context";
import { useContext } from "react";

const Standout = () => {
  const ctx = useContext(ScreenContext);

  return (
    <section className="wrapper">
      <div className="split-40">
        {ctx.isMobile ? (
          <img className="img" src={standoutMobile}></img>
        ) : (
          <img className="img" src={standoutDesktop}></img>
        )}
      </div>

      <div className="split-60">
        <div className="content-1">
          <h1>Stand out to the right audience</h1>
          <p>
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we'll build and
            extends your brand in digital places.
          </p>
          <button className={classes["standout-button"]}>LEARN MORE</button>
        </div>
      </div>
    </section>
  );
};

export default Standout;
