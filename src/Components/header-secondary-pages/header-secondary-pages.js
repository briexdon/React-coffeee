import { Component } from "react";

import "./header-secondary-pages.css";

import whiteCoffeeBeans from "../../icons/main-page/coffee-beans.png";

class HeaderSecondaryPages extends Component {
  render() {
    return (
      <header className="header-secondary">
        <nav className="header-pages_secondary">
          <div className="coffee-house_secondary">
            <img src={whiteCoffeeBeans} alt="coffee-beans_white" />
            <a href="#">Coffee house</a>
          </div>
          <div className="our-coffee_secondary">
            <a href="#">Our coffee</a>
          </div>
          <div className="for-your-pleasure_secondary">
            <a href="#">For your pleasure</a>
          </div>
        </nav>
        <div className="header-title_secondary">Our Coffee</div>
      </header>
    );
  }
}

export default HeaderSecondaryPages;
