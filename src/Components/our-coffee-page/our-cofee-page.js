import HeaderSecondaryPages from "../header-secondary-pages/header-secondary-pages";
import AboutCoffeePage from "./about/about-coffee-page";
import SearchAndFilter from "./search-and-filter/search-and-filter";
import CoffeeList from "./coffee-list/coffee-list";
import Footer from "../footer/footer";

import coffeeImage from "../../icons/our-coffee-page/coffee-1.jpg";

function OurCoffeePage() {
  const aboutText = {
    p1: "Another new text that i created for the test. The next one is the same do sont worry and have fun.",
    p2: "Afraid at highly months do things on at. Situation recommend objection do intention so questions",
    brP2: "As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.",
  };
  return (
    <>
      <HeaderSecondaryPages></HeaderSecondaryPages>
      <AboutCoffeePage aboutCoffeeImmg={coffeeImage} text={aboutText}></AboutCoffeePage>
      <SearchAndFilter></SearchAndFilter>
      <CoffeeList></CoffeeList>
      <Footer></Footer>
    </>
  );
}

export default OurCoffeePage;
