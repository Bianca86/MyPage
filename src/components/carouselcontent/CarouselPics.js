import React from "react";

function CarouselPics({ src }) {
  let imgStyle = {
    width: 100 + "%",
    heigh: "auto",
  };

  return <img src={src} alt="slide-img" style={imgStyle}></img>;
}

export default CarouselPics;
