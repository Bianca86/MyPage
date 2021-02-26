import React, { useState } from "react";
import "./Carousel.scss";
import CarouselPics from "./CarouselPics";
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";
import img4 from "./img/img4.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";

function CarouselContent() {
  const [x, setX] = useState(0);
  let sliderArray = [
    <CarouselPics src={img1} />,
    <CarouselPics src={img2} />,
    <CarouselPics src={img3} />,
    <CarouselPics src={img4} />,
  ];
  const goLeft = () => {
    x === 0 ? setX(-100 * (sliderArray.length - 1)) : setX(x + 100);
  };

  const goRight = () => {
    x === -100 * (sliderArray.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <div className="slider">
      {sliderArray.map((item, index) => {
        return (
          <div
            key={index}
            className="slide"
            style={{ transform: `translateX(${x}%)` }}
          >
            {item}
          </div>
        );
      })}
      <button id="goLeft" onClick={goLeft}>
        <FontAwesomeIcon icon={faCaretLeft}></FontAwesomeIcon>
      </button>
      <button id="goRight" onClick={goRight}>
        <FontAwesomeIcon icon={faCaretRight}></FontAwesomeIcon>
      </button>
    </div>
  );
}

export default CarouselContent;
