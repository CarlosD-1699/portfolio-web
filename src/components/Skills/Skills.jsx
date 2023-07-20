import React from "react";
import Lenguajes from "../../assets/img/Lenguajes.svg";
import colorSharp from "../../assets/img/color-sharp.png";
import Librerias from "../../assets/img/React1.svg";
import Frameworks from "../../assets/img/tailwindcss1.svg";
import "./Skills.css";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Estos son algunos de los lenguajes, librerias, frameworks y{" "}
                <br />
                herramientas que utilizo en el desarrollo Front-End
              </p>
              <div className="item-container">
                <div className="item">
                  <img src={Lenguajes} alt="Image" />
                  <h5>Lenguajes</h5>
                </div>
                <div className="item">
                  <img src={Frameworks} alt="Image" />
                  <h5>Frameworks</h5>
                </div>
                <div className="item">
                  <img src={Librerias} alt="Image" />
                  <h5>Librerias</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};

export default Skills;
