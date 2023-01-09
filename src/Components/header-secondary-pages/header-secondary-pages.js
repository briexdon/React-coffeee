import "./header-secondary-pages.css";

import whiteCoffeeBeans from "../../icons/main-page/coffee-beans.png";

function HeaderSecondaryPages({ headerTitle }) {
  return (
    <header className="header-secondary">
      <nav className="header-pages_secondary">
        <div className="coffee-house_secondary">
          <img src={whiteCoffeeBeans} alt="coffee-beans_white" />
          <a href="/">Coffee house</a>
        </div>
        <div className="our-coffee_secondary">
          <a href="/OurCoffee">Our coffee</a>
        </div>
        <div className="for-your-pleasure_secondary">
          <a href="/ForYourPleasure">For your pleasure</a>
        </div>
      </nav>
      <div className="header-title_secondary">{headerTitle ? headerTitle : "Our coffee"}</div>
    </header>
  );
}

export default HeaderSecondaryPages;
