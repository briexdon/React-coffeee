import { Component } from "react";

import "./header-main-page.css";

import whiteCoffeeBeans from "../../../icons/main-page/coffee-beans.png";
import whiteBeansLogo from "../../../icons/main-page/beans-logo.png";

class HeaderMainPage extends Component {
  render() {
    return (
      <header className="header-main-page">
        <nav className="header-pages">
          <div className="coffee-house">
            <img src={whiteCoffeeBeans} alt="coffee-beans_white" />
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
          <h1 className="header-title">Everything You Love About Coffee</h1>
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
