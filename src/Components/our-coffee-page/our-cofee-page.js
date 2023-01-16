import HeaderSecondaryPages from "../header-secondary-pages/header-secondary-pages";
import AboutCoffeePage from "./about/about-coffee-page";
import SearchAndFilter from "./search-and-filter/search-and-filter";
import CoffeeList from "./coffee-list/coffee-list";
import Footer from "../footer/footer";

import aboutCoffeeImage from "../../icons/our-coffee-page/coffee-1.jpg";

import coffeeData from "../myCoffeeData";

import { Component } from "react";

class OurCoffeePage extends Component {
  state = {
    data: coffeeData,
    search: "",
    filter: "",
  };

  updateGlobaSearch = (search) => {
    this.setState({ search: search });
  };

  showGoodsFromSearch = (data, search) => {
    const searchCoffee = data.filter((elem) => elem.name.indexOf(search) > -1);
    return searchCoffee;
  };

  updateFilter = (filter) => {
    this.setState({ filter: filter });
  };

  filterCoffeeByCountry = (data, filter) => {
    switch (filter) {
      case `Brazil`:
        return data.filter((elem) => elem.country === "Brazil");
      case `Kenya`:
        return data.filter((elem) => elem.country === "Kenya");
      case `Columbia`:
        return data.filter((elem) => elem.country === "Columbia");
      default:
        return data;
    }
  };

  render() {
    const { data, search, filter } = this.state;
    const aboutText = {
      p1: "Another new text that i created for the test. The next one is the same do sont worry and have fun.",
      p2: "Afraid at highly months do things on at. Situation recommend objection do intention so questions",
      brP2: "As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.",
    };
    return (
      <>
        <HeaderSecondaryPages></HeaderSecondaryPages>
        <AboutCoffeePage aboutCoffeeImage={aboutCoffeeImage} text={aboutText}></AboutCoffeePage>
        <SearchAndFilter
          updateFilter={this.updateFilter}
          updateGlobaSearch={this.updateGlobaSearch}
        ></SearchAndFilter>
        <CoffeeList
          visibleData={this.filterCoffeeByCountry(this.showGoodsFromSearch(data, search), filter)}
        ></CoffeeList>

        <Footer></Footer>
      </>
    );
  }
}

export default OurCoffeePage;
