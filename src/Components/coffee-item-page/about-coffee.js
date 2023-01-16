import "./about-coffee.css";
import blackBeansLogo from "../../icons/main-page/black-beans-logo.png";
import coffee from "../../icons/coffee-item.jpg";

import { Component } from "react";

class AboutCoffee extends Component {
  render() {
    return (
      <section className="coffee-item-content">
        <div className="coffee-item-image">
          <img src={coffee} alt="coffee" />
        </div>
        <div className="coffee-descr">
          <div className="coffee-title">About it </div>
          <img src={blackBeansLogo} alt="black-beans-logo" />
          <div className="coffee-country"> {/* <span>Country: </span> {this.props.country} */}</div>
          <div className="coffee-text">
            {/* <span> Description: </span> {this.props.text} Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. */}
          </div>
          <div className="coffee-price">{/* Price: <span> {this.props.price} </span> */}</div>
        </div>
      </section>
    );
  }
}

export default AboutCoffee;
