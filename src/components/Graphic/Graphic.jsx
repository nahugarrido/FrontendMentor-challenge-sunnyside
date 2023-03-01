import classes from "./Graphic.module.css";
import graphicMobile from "../../assets/mobile/image-graphic-design.jpg";
import graphicDesktop from "../../assets/desktop/image-graphic-design.jpg";
import ScreenContext from "../../store/screen-context";
import { useContext } from "react";

const Graphic = () => {
  const ctx = useContext(ScreenContext);

  return (
    <div className="split-80">
      {ctx.isMobile ? (
        <img className="img" src={graphicMobile}></img>
      ) : (
        <img className="img" src={graphicDesktop}></img>
      )}
      <div className="overlay-card green">
        <h2>Graphic Design</h2>
        <p>
          Great design makes you memorable. We deliver artwork that underscores
          your brand message and captures potential clients attention .
        </p>
      </div>
    </div>
  );
};

export default Graphic;
