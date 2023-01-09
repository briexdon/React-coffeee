import "./our-best-main-page.css";

import bestCoffee_1 from "../../../icons/main-page/coffee-1.png";
import bestCoffee_2 from "../../../icons/main-page/coffee-2.png";
import bestCoffee_3 from "../../../icons/main-page/coffee-3.png";

function OurBest() {
  return (
    <section className="our-best">
      <div className="our-best-title">Our best</div>
      <div className="our-best-goods">
        <div className="best-coffee-1">
          <img src={bestCoffee_1} alt="our-best-coffee" />
          <div className="best-coffee-name">Solimo Coffee Beans 2 kg</div>
          <div className="best-coffee-price">6.99$</div>
        </div>
        <div className="best-coffee-2">
          <img src={bestCoffee_2} alt="our-best-coffee" />
          <div className="best-coffee-name">Presto Coffee Beans 1 kg</div>
          <div className="best-coffee-price">15.99$</div>
        </div>
        <div className="best-coffee-3">
          <img src={bestCoffee_3} alt="our-best-coffee" />
          <div className="best-coffee-name">AROMISTICO Coffee 1 kg</div>
          <div className="best-coffee-price">10.73$</div>
        </div>
      </div>
    </section>
  );
}

export default OurBest;
