import React from "react";
import "./index.scss";
import logo from "../../../assets/svg/Group.svg";
import bell from "../../../assets/svg/bell.svg";
import img from "../../../assets/svg/image4.svg";
import vector from "../../../assets/svg/Vector(2).svg";

import "react-pro-sidebar/dist/css/styles.css";



const TopNav = () => {
  return (
    <div className="Section_Topbar">
      <div className="logose">
          <img src={logo} alt="logo"/>
      </div>
      <div className="middler">
          <input type="text" placeholder="search for anything" />
          <button>
          <img src={vector} alt="search"/>

          </button>
      </div>
      <div className="righter">
          <div>
              <p><u>Docs</u></p>
          </div>
          <div>
              <img src={bell} alt="bell"/>
          </div>
          <div>
          <img  className="round" src={img} alt="img"/>
              
          </div>
          <div><p>Adedeji <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.39229 4.0516C3.72823 4.42504 4.27511 4.42192 4.60791 4.0516L7.48291 0.856996C7.81885 0.484336 7.68525 0.181995 7.18447 0.181995H0.815667C0.314887 0.181995 0.183627 0.487456 0.517227 0.856996L3.39229 4.0516Z" fill="#213F7D"/>
</svg>
</p></div>
      </div>
    </div>
  );
};

export default TopNav;
