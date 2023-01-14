import "./header-main-page.css";

import doubleWhiteBeans from "../../../icons/main-page/coffee-beans.png";
import threeWhiteBeans from "../../../icons/main-page/white-beans-logo.png";

function HeaderMainPage() {
  return (
    <header className="header-main-page">
      <nav className="header-pages">
        <div className="coffee-house">
          <img src={doubleWhiteBeans} alt="double white beans" />
          <a href="/">Coffee house</a>
        </div>
        <div className="header-our-coffee">
          <a href="/OurCoffee">Our coffee</a>
        </div>
        <div className="for-your-pleasure">
          <a href="/ForYourPleasure">For your pleasure</a>
        </div>
      </nav>
      <div className="header-descr">
        <h1 className="header-title">Everything You Love About Coffee</h1>
        <img src={threeWhiteBeans} alt="three-white-beans" />
        <div className="header-text">
          We makes every day full of energy and taste <br /> Want to try our beans?
        </div>
        <a href="/OurCoffee" className="button header-btn">
          More
        </a>
      </div>
    </header>
  );
}

export default HeaderMainPage;
