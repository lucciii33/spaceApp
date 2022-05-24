import React from "react";
import { Link } from "react-router-dom";
import { Parallax } from "react-parallax";
import image3 from "../../img/image3.jpg";

export const ImageThree = () => {
  return (
    <Parallax
      className="image"
      blur={0}
      bgImage={image3}
      bgImageAlt="the cat"
      strength={600}
    >
      <div className="content">
        <div className="centerMars5">
          <h1>Trakc Asteroids and satellites.</h1>
          <p>
            click below bellow soo you can see the asteroids and salitels around
            the word in real time
          </p>
          <div>
            <Link to="/mapview">
              <button type="button" class="btn btn-outline-dark">
                Trakcer
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Parallax>
  );
};
