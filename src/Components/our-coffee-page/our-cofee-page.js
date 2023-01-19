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
    filter: [],
  };

  updateGlobaSearch = (search) => {
    this.setState({ search: search });
  };

  showGoodsFromSearch = (data, search) => {
    const searchCoffee = data.filter((elem) => elem.name.indexOf(search) > -1);
    return searchCoffee;
  };

  updateFilter = (filterAttr) => {
    const checkFilter = this.state.filter.find((elem) => elem === filterAttr);

    if (checkFilter) {
      this.setState(({ filter }) => {
        return {
          filter: filter.filter((elem) => elem !== filterAttr),
        };
      });
    } else {
      this.setState(({ filter }) => {
        return {
          filter: [...filter, filterAttr],
        };
      });
    }
  };

  filterCoffeeByCountry = (data, filter) => {
    const countries = [];

    function compareCountries(a, b) {
      if (a.country < b.country) {
        return -1;
      }
      if (a.country > b.country) {
        return 1;
      }
      if (b.price < a.price) {
        return -1;
      }
      if (b.price > a.price) {
        return 1;
      }
      return 0;
    }

    filter.forEach((elem) => {
      countries.push(elem);
    });

    if (countries.length > 0) {
      const newData = data.filter((elem) => {
        let findCountry;

        countries.forEach((el) => {
          if (elem.country === el) {
            findCountry = el;
          }
        });

        return elem.country === findCountry;
      });

      return newData.sort(compareCountries);
    } else {
      return data.sort(compareCountries);
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
          data={coffeeData}
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
