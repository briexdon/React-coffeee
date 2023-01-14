import "./footer.css";

import doubleBlackBeans from "../../icons/main-page/black-coffee-beans.png";
import threeBlackBeans from "../../icons/main-page/black-beans-logo.png";

function Footer() {
  return (
    <footer className="footer">
      <nav className="footer-pages">
        <div className="footer-coffee-house">
          <img src={doubleBlackBeans} alt="double black beans" />
          <a href="/">Coffee house</a>
        </div>
        <div className="footer-our-coffee">
          <a href="/OurCoffee">Our coffee</a>
        </div>
        <div className="for-your-pleasure">
          <a href="/ForYourPleasure">For your pleasure</a>
        </div>
      </nav>
      <img src={threeBlackBeans} alt="three black beans" />
    </footer>
  );
}

export default Footer;
