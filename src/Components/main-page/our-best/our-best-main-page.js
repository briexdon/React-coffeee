import "./our-best-main-page.css";

import coffeeData from "../../myCoffeeData";
import ShowBestCoffee from "./showBestCoffee";

function OurBest() {
  return (
    <section className="our-best">
      <div className="our-best-title">Our best</div>
      <div className="our-best-goods">{<ShowBestCoffee data={coffeeData} />} </div>
    </section>
  );
}

export default OurBest;
