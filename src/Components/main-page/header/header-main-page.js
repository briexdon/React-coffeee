import { Component } from "react";

import "./header-main-page.css";

import headerBg from "../../../icons/main-page/header-bg.jpg";
import coffeeBeans from "../../../icons/main-page/coffee-beans.png";
import whiteBeansLogo from "../../../icons/main-page/beans-logo.png";

class HeaderMainPage extends Component {
  render() {
    return (
      <header className="header-main-page">
        <img src={headerBg} alt="header-bg" />
        <nav className="header-pages">
          <div className="coffee-house">
            <img src={coffeeBeans} alt="coffee-beans_white" />
            <a href="#">Coffee house</a>
          </div>
          <div className="our-coffee">
            <a href="#">Our coffee</a>
          </div>
          <div className="for-your-pleasure">
            <a href="#">For your pleasure</a>
          </div>
        </nav>
        <div className="header-descr">
          <div className="header-title">Everything You Love About Coffee</div>
          <img src={whiteBeansLogo} alt="white-beans-logo" />
          <div className="header-text">
            We makes every day full of energy and taste <br /> Want to try our beans?
          </div>
          <button className="header-btn">More</button>
        </div>
      </header>
    );
  }
}

export default HeaderMainPage;
