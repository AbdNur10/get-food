import React from "react";
import Slider from "react-slick";
import ave01 from "../../../assets/images/ava-1.jpg";
import ave02 from "../../../assets/images/ava-2.jpg";
import ave03 from "../../../assets/images/ava-4.jpg";

import '../../../styles/slider.css'


const TestimonialPart = () => {
  const setting = {
    dots: true,
    autoPlay: true,
    infinite: true,
    speed: 1000,
    autoPlaySpeed: 1000,
    swiperToSlider: true,
    alideToShow: 1,
    slideToScroll: 1,
  };
  return (
    <Slider {...setting}>
      <div>
        <p className="review_text">
         " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ipsam
          placeat, sed nam natus suscipit earum magnam porro doloribus deleniti
          maiores eveniet beatae, reprehenderit unde libero nihil aliquid
          asperiores iste!"
        </p>
        <div className=" slider_content d-flex align-items-center gap-4">
            <img src={ave01} alt="" className=" rounded"/>
            <h5>Michele Marsh</h5>
        </div>
      </div>
      <div>
        <p className="review_text">
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ipsam
          placeat, sed nam natus suscipit earum magnam porro doloribus deleniti
          maiores eveniet beatae, reprehenderit unde libero nihil aliquid
          asperiores iste!"
        </p>
        <div className=" slider_content d-flex align-items-center gap-4">
            <img src={ave02} alt="" className=" rounded"/>
            <h5>Steven Lina</h5>
        </div>
      </div>
      <div>
        <p className="review_text">
         " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ipsam
          placeat, sed nam natus suscipit earum magnam porro doloribus deleniti
          maiores eveniet beatae, reprehenderit unde libero nihil aliquid
          asperiores iste!"
        </p>
        <div className=" slider_content d-flex align-items-center gap-4">
            <img src={ave03} alt="" className=" rounded"/>
            <h5>Alex Star</h5>
        </div>
      </div>
     
    </Slider>
  );
};

export default TestimonialPart;
