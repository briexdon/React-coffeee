import { Component } from "react";

import AboutCoffee from "./about-coffee";
import HeaderSecondaryPages from "../header-secondary-pages/header-secondary-pages";
import Footer from "../footer/footer";

class CoffeeItemPage extends Component {
  render() {
    return (
      <>
        <HeaderSecondaryPages></HeaderSecondaryPages>
        <AboutCoffee></AboutCoffee>
        <Footer></Footer>
      </>
    );
  }
}

export default CoffeeItemPage;
