import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Home } from "../../../assets/icons/home.svg";
import { ReactComponent as Ball } from "../../../assets/icons/ball.svg";
import { ReactComponent as Profile } from "../../../assets/icons/profile.svg";
import { ReactComponent as Kubok } from "../../../assets/icons/kubok.svg";
import { ReactComponent as Person } from "../../../assets/icons/person.svg";
import  icon  from "../../../assets/icons/icon.jpg";
function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar_container">
        <div className="icon_part">
          <a href="/"><img src={icon} alt="logo"/></a>
        </div>
        <div className="menu_part">
          <Link to="/" className="link">
            <div className="text_part">
              <Home className="icon"/>
              <span>Asosiy</span>
            </div>
          </Link>
          <Link to="/statistics" className="link">
            <div className="text_part">
              <Kubok className="icon"/>
              <span>O'yinlar statistikasi</span>
            </div>
          </Link>
          <Link to="/all-players" className="link">
            <div className="text_part">
              <Ball className="icon"/>
              <span>Bizning futbolchilar</span>
            </div>
          </Link>
          <Link to="/" className="link">
            <div className="text_part">
              <Person className="icon"/>
              <span>Profil</span>
            </div>
          </Link>
        </div>
        <div className="avatar_part">
          <button><Profile className="icon"/></button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
