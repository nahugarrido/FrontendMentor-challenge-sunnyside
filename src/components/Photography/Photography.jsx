import classes from "./Photography.module.css";
import orangeMobile from "../../assets/mobile/image-photography.jpg";
import orangeDesktop from "../../assets/desktop/image-photography.jpg";
import ScreenContext from "../../store/screen-context";
import { useContext } from "react";

const Photography = () => {
  const ctx = useContext(ScreenContext);

  return (
    <div className="split-80">
      {ctx.isMobile ? (
        <img className="img" src={orangeMobile}></img>
      ) : (
        <img className="img" src={orangeDesktop}></img>
      )}
      <div className="overlay-card blue">
        <h2>Photography</h2>
        <p>
          Increase your credibility by getting the most stunning, high-quality
          photos that improve your business image.
        </p>
      </div>
    </div>
  );
};

export default Photography;
