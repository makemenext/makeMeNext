import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";
export default function Offers() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <Slider {...settings}>
      <div>
        <h3><Card/></h3>
      </div>
      <div>
        <h3><Card2/></h3>
      </div>
      <div>
        <h3><Card3/></h3>
      </div>
      <div>
        <h3><Card4/></h3>
      </div>
      <div className="CuratedOffers">
        Curated Offers
      </div>
     
    </Slider>
  );
}