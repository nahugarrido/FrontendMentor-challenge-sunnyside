import { useContext } from "react";
import ScreenContext from "../../../store/screen-context";
import milkbottlesDesktop from "../../../assets/desktop/image-gallery-milkbottles.jpg";
import orangeDesktop from "../../../assets/desktop/image-gallery-orange.jpg";
import sugarcubesDesktop from "../../../assets/desktop/image-gallery-sugarcubes.jpg";
import coneDesktop from "../../../assets/desktop/image-gallery-cone.jpg";
import milkbottlesMobile from "../../../assets/mobile/image-gallery-milkbottles.jpg";
import orangeMobile from "../../../assets/mobile/image-gallery-orange.jpg";
import sugarcubesMobile from "../../../assets/mobile/image-gallery-sugar-cubes.jpg";
import coneMobile from "../../../assets/mobile/image-gallery-cone.jpg";

import classes from "./Gallery.module.css";

const Gallery = () => {
  const ctx = useContext(ScreenContext);

  return (
    <section className={classes.gallery}>
      <div className={classes.box}>
        {ctx.isMobile ? (
          <img src={milkbottlesMobile} alt="gallery milk"></img>
        ) : (
          <img src={milkbottlesDesktop} alt="gallery milk"></img>
        )}
      </div>
      <div className={classes.box}>
        {ctx.isMobile ? (
          <img src={orangeMobile} alt="gallery orange"></img>
        ) : (
          <img src={orangeDesktop} alt="gallery orange"></img>
        )}
      </div>
      <div className={classes.box}>
        {ctx.isMobile ? (
          <img src={coneMobile} alt="gallery cone"></img>
        ) : (
          <img src={coneDesktop} alt="gallery cone"></img>
        )}
      </div>
      <div className={classes.box}>
        {ctx.isMobile ? (
          <img src={sugarcubesMobile} alt="gallery cone"></img>
        ) : (
          <img src={sugarcubesDesktop} alt="gallery cone"></img>
        )}
      </div>
    </section>
  );
};

export default Gallery;
