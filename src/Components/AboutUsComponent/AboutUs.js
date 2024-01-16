import React from "react";
import Book2 from "../../assets/header2.png";

import "./AboutUsStyle.css";

function AboutUs() {
  return (
    <section id="about">
    <div className="about-us">
      <div className="about-left">
        <p className="about-us-heading">ABOUT US</p>

        <div className="about-us-left-content">
          <p className="about-us-left-p1">
          We Render Educational Consultancy Services. We Offer Skill Acquisition/vocational Training services. We Engage In The Business Of Foreign And Local Procurement Of Goods And Services. Primary/supplies Of Books, Stationeries, Pamphlets.
          </p>
          <p className="about-us-left-p2">
          We provide consult services on school selection, college and university, career guidance, study abroad programs, educational curriculum and program development, training and professional educational policy and planning.
          </p>
        </div>
      </div>

      <div className="about-right">
        <img className="about-image" src={Book2} />
      </div>
    </div>
    </section>
  );
}

export default AboutUs;
