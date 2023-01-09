import "./footer.css";

import blackCoffeeBeans from "../../icons/main-page/coffee-beans.png";
import blackBeansLogo from "../../icons/main-page/beans-logo.png";

function Footer() {
  return (
    <footer className="footer">
      <nav className="footer-pages">
        <div className="footer-coffee-house">
          <img src={blackCoffeeBeans} alt="coffee-beans_black" />
          <a href="/">Coffee house</a>
        </div>
        <div className="footer-our-coffee">
          <a href="/OurCoffee">Our coffee</a>
        </div>
        <div className="for-your-pleasure">
          <a href="/ForYourPleasure">For your pleasure</a>
        </div>
      </nav>
      <img src={blackBeansLogo} alt="black-beans-logo" />
    </footer>
  );
}

export default Footer;
