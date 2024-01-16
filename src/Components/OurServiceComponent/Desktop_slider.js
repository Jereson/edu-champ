import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';

// import required modules
import { Navigation } from "swiper";

import './Desktop_slider_Style.css'
function DesktopSlider(props){
    return (

        <div className="desktop-swiper">
          <Swiper
            navigation={true} modules={[Navigation]}
            className="mySwiper"
          >
            {props.service.map(({ title, image, content }, index) => {
              return (
                <SwiperSlide key={title} id={title} className="swiper-slide">
                  <div>
                    <img className="slider-image" src={image} alt={title} />
                    <h5 className="slider-title">{title}</h5>

                    <div className="slider-content">
                      <div className="slider-content-inner">
                        <small>{content}</small>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
    )
}

export default DesktopSlider