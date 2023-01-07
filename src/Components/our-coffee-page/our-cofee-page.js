import { Component } from "react";

import HeaderSecondaryPages from "../header-secondary-pages/header-secondary-pages";
import AboutCoffeePage from "./about/about-coffee-page";
import SearchAndFilter from "./search-and-filter/search-and-filter";
class OurCoffeePage extends Component {
  render() {
    return (
      <>
        <HeaderSecondaryPages></HeaderSecondaryPages>
        <AboutCoffeePage></AboutCoffeePage>
        <SearchAndFilter></SearchAndFilter>
      </>
    );
  }
}

export default OurCoffeePage;
