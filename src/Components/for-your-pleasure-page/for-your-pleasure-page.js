import { Component } from "react";

import HeaderSecondaryPages from "../header-secondary-pages/header-secondary-pages";
import AboutCoffeePage from "../our-coffee-page/about/about-coffee-page";
import CoffeeList from "../our-coffee-page/coffee-list/coffee-list";
import Footer from "../footer/footer";

class ForYourPleasurePage extends Component {
  render() {
    return (
      <>
        <HeaderSecondaryPages></HeaderSecondaryPages>
        <AboutCoffeePage></AboutCoffeePage>
        <CoffeeList></CoffeeList>
        <Footer></Footer>
      </>
    );
  }
}

export default ForYourPleasurePage;
