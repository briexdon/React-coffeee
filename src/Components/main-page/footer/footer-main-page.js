import { Component } from "react";

import "./footer-main-page.css";

import blackCoffeeBeans from "../../../icons/main-page/coffee-beans.png";
import blackBeansLogo from "../../../icons/main-page/beans-logo.png";

class Footer extends Component {
  render() {
    return (
      <footer className="footer-main-page">
        <nav className="footer-pages">
          <div className="coffee-house">
            <img src={blackCoffeeBeans} alt="coffee-beans_black" />
            <a href="#">Coffee house</a>
          </div>
          <div className="our-coffee">
            <a href="#">Our coffee</a>
          </div>
          <div className="for-your-pleasure">
            <a href="#">For your pleasure</a>
          </div>
        </nav>
        <img src={blackBeansLogo} alt="black-beans-logo" />
      </footer>
    );
  }
}

export default Footer;
