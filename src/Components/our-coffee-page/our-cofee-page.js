import { Component } from "react";

import HeaderSecondaryPages from "../header-secondary-pages/header-secondary-pages";
import AboutCoffeePage from "./about/about-coffee-page";
import SearchAndFilter from "./search-and-filter/search-and-filter";
import CoffeeList from "./coffee-list/coffee-list";
import Footer from "../footer/footer";

class OurCoffeePage extends Component {
  render() {
    return (
      <>
        <HeaderSecondaryPages></HeaderSecondaryPages>
        <AboutCoffeePage></AboutCoffeePage>
        <SearchAndFilter></SearchAndFilter>
        <CoffeeList></CoffeeList>
        <Footer></Footer>
      </>
    );
  }
}

export default OurCoffeePage;
