import { React, useState } from "react";


import "./OurServiceStyle.css";
import ServicesData from "./Services_Data";
import MobileSlider from "./Mobile_Slider";
import DesktopSlider from "./Desktop_slider";



function OurService() {
  const service = ServicesData.data.service;
 
 
  return (
    <section id="service">
      <div className="our-service-slider">
        <h2 className="sub-service-heading">Our Services</h2>
        <hr className="service-hoz-line"></hr>
        {/* Desktop View */}
<DesktopSlider service={service}/>

        {/* Mobile Swiper */}
        <MobileSlider service={service} />
      </div>
    </section>
  );
}

export default OurService;
