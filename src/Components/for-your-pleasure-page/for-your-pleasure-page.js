import HeaderSecondaryPages from "../header-secondary-pages/header-secondary-pages";
import AboutCoffeePage from "../our-coffee-page/about/about-coffee-page";
import CoffeeList from "../our-coffee-page/coffee-list/coffee-list";
import Footer from "../footer/footer";

import coffeeImage from "../../icons/for-your-pleasure-page/coffee.png";

function ForYourPleasurePage() {
  const headerTitle = "For your pleasure";
  const aboutText = {
    p1: "Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.",
    p2: "Afraid at highly months do things on at. Situation recommend objection do intention so questions",
    brP2: "As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.",
  };
  return (
    <>
      <HeaderSecondaryPages headerTitle={headerTitle}></HeaderSecondaryPages>
      <AboutCoffeePage aboutCoffeeImmg={coffeeImage} text={aboutText}></AboutCoffeePage>
      <CoffeeList></CoffeeList>
      <Footer></Footer>
    </>
  );
}

export default ForYourPleasurePage;
