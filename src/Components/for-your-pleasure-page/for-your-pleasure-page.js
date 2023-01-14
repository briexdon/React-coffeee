import HeaderSecondaryPages from "../header-secondary-pages/header-secondary-pages";
import AboutCoffeePage from "../our-coffee-page/about/about-coffee-page";
import Footer from "../footer/footer";

import aboutCoffeeImage from "../../icons/for-your-pleasure-page/coffee.png";

import CoffeeList from "../our-coffee-page/coffee-list/coffee-list";
import coffeeData from "../myCoffeeData";

import { Component } from "react";

class ForYourPleasurePage extends Component {
  render() {
    const headerTitle = "For your pleasure";
    const aboutText = {
      p1: "Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.",
      p2: "Afraid at highly months do things on at. Situation recommend objection do intention so questions",
      brP2: "As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.",
    };
    return (
      <>
        <HeaderSecondaryPages headerTitle={headerTitle} />
        <AboutCoffeePage aboutCoffeeImage={aboutCoffeeImage} text={aboutText} />
        <CoffeeList visibleData={coffeeData} />
        <Footer />
      </>
    );
  }
}

export default ForYourPleasurePage;
