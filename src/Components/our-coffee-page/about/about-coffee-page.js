import "./about-coffee-page.css";

import blackBeansLogo from "../../../icons/main-page/beans-logo.png";

function AboutCoffeePage({ aboutCoffeeImmg, text }) {
  return (
    <section className="about-coffee-page">
      <div className="about-coffee-content">
        <div className="about-coffee-image">
          <img src={aboutCoffeeImmg} alt="coffee" />
        </div>
        <div className="about-coffee-descr">
          <div className="about-coffee-title">About our beans</div>
          <img src={blackBeansLogo} alt="black-beans-logo" />
          <div className="about-coffee-text">
            <p> {text.p1} </p>
            <p>
              {" "}
              {text.p2} <br /> {text.brP2}
            </p>
          </div>
        </div>
      </div>
      <div className="about-coffee-line"></div>
    </section>
  );
}

export default AboutCoffeePage;
