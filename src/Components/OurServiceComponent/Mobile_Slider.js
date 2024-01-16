import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "./Mobile_Slider_Style.css";
import { EffectCards } from "swiper";

function MobileSlider(props) {
  const [swiperContent, setSwiperContent] = useState(0);

  const setContent = (index) => {
    setSwiperContent(index);
  };
  return (
    <div className="mobile-swiper-section">
      <div className="mobile-swiper">
        <Swiper
          effect={"cards"}
          // grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
          // slideShadows={false}
          coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 0,
              modifier: 0,
              slideShadows: false,
            }}
          onSlideChange={(swiperCode) => {
            const { activeIndex, snapIndex, previousIndex, realIndex } =
              swiperCode;
            setContent(activeIndex);
          }}
        >
          {props.service.map(({ title, image, content }, index) => {
            return (
              <SwiperSlide  key={title} id={title}>
                <div>
                  <img
                    className="mobile-swiper-image"
                    src={image}
                    alt={title}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>{" "}
        <div className="mobile-slider-content">
          <h5>{props.service[swiperContent].title}</h5>

          <div className="mobile-slider-content-inner2">
            <small>{props.service[swiperContent].content}</small>
          </div>
        </div>
      </div>
    </div>
  );
}


export default MobileSlider