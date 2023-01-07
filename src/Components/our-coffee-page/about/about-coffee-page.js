import { Component } from "react";

import "./about-coffee-page.css";

import blackBeansLogo from "../../../icons/main-page/beans-logo.png";
import coffee from "../../../icons/our-coffee-page/coffee-1.jpg";

class AboutCoffeePage extends Component {
  render() {
    return (
      <section className="about-coffee-page">
        <div className="about-coffee-content">
          <div className="about-coffee-image">
            <img src={coffee} alt="coffee" />
          </div>
          <div className="about-coffee-descr">
            <div className="about-coffee-title">About our beans</div>
            <img src={blackBeansLogo} alt="black-beans-logo" />
            <div className="about-coffee-text">
              <p>
                Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
              </p>
              <p>
                Afraid at highly months do things on at. Situation recommend objection do intention
                so questions. <br /> As greatly removed calling pleased improve an. Last ask him
                cold feel met spot shy want. Children me laughing we prospect answered followed. At
                it went is song that held help face.
              </p>
            </div>
          </div>
        </div>
        <div className="about-coffee-line"></div>
      </section>
    );
  }
}

export default AboutCoffeePage;
