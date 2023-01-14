import "./about-coffee-page.css";

import threeBlackBeans from "../../../icons/main-page/black-beans-logo.png";

function AboutCoffeePage({ aboutCoffeeImage, text }) {
  return (
    <section className="about-coffee-page">
      <div className="about-coffee-content">
        <div className="about-coffee-image">
          <img src={aboutCoffeeImage} alt="coffee" />
        </div>
        <div className="about-coffee-descr">
          <div className="about-coffee-title">About our beans</div>
          <img src={threeBlackBeans} alt="three black beans" />
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
