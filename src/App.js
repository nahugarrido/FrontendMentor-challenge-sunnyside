import { useState, useEffect } from "react";
import ScreenContext from "./store/screen-context";
import Banner from "./components/Layout/Banner/Banner";
import Transform from "./components/Transform/Transform";
import Standout from "./components/Standout/Standout";
import Testimonials from "./components/Testimonials/Testimonials";
import Gallery from "./components/Layout/Gallery/Gallery";
import Footer from "./components/Layout/Footer/Footer";
import Header from "./components/Layout/Header/Header";
import Graphic from "./components/Graphic/Graphic";
import Photography from "./components/Photography/Photography";

import "./App.css";

function App() {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let isMobile = Boolean;

  screenSize.width >= 768 ? (isMobile = false) : (isMobile = true);

  return (
    <>
      <ScreenContext.Provider value={{ isMobile: isMobile }}>
        <Header />
        <main>
          <Banner />
          <Transform />
          <Standout />
          <div className="wrapper">
            <Graphic />
            <Photography />
          </div>
          <Testimonials />
        </main>
        <Gallery />
        <Footer />
      </ScreenContext.Provider>

      <div className="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://www.nahuelgarrido.com.ar" target="_blank">
          Nahuel Garrido
        </a>
        .
      </div>
    </>
  );
}

export default App;
