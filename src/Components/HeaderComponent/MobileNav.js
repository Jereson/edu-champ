import { React, useState } from "react";
import "./Header.css";
import imgLogo from "../../assets/champ-logo.png";
import { BsFillGridFill } from "react-icons/bs";
import { MdClear } from "react-icons/md";

function MobileNav() {
  const [isNavShow, setIsNavShow] = useState(false);

  const resetShowButton = () => {
    setIsNavShow((prev) => !prev);
  };

  return (
  
      <div className="mobile-nav">
        <div className="mobile-nav-icon-main">
          {" "}
          <div onClick={resetShowButton} className="mobile-nav-icon">
            {" "}
            {!isNavShow ? <BsFillGridFill /> : <MdClear />}
          </div>
        </div>

        {isNavShow ? (
          <ul
            onClick={() => resetShowButton(false)}
            className="mobile-header-route"
          >
            <li>
              <a className="active" href="#home">
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
        ) : (
          <div className="no-nav"></div>
        )}
      </div>
  
  );
}

export default MobileNav;
