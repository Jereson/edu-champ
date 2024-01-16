import {React,} from "react";
import "./Header.css";
import ImgHeader from "../../assets/classroom1.png";
import imgLogo from "../../assets/edu-logo2.png";
import { BsFillGridFill } from "react-icons/bs";
import {MdClear} from "react-icons/md"
import MobileNav from "./MobileNav";

function Header() {


  return (
    <div className="heaer-section" >
      <div className="header-overlay"></div>
      <div>
        <img className="header-img" src={ImgHeader}></img>
      </div>

      {/* <div> */}
      <nav className="header-nav">
        <div className="header-img-div">
          <img className="champ-logo" src={imgLogo} alt="champ-logo"></img>
        </div>
        <div>

          <div  className="mobileNav" >  <MobileNav/></div>


          <ul className="header-route">
            <li>
              <a className="active" href="#">
                Home
              </a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#service">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul> 
        </div> 
      </nav>
      {/* </div> */}

      <div className="header-body">
        <div className="header-body1">Finding learning fun, </div>
        <div className="header-body2">Edu-Champs & Logistics</div>
        <div className="header-body3">
        Equipping all for better future
        </div>

        <a href="#quiz"> <div  className="btn get-started">Get Started</div></a>
      </div>
    </div>
  );
}

export default Header;
