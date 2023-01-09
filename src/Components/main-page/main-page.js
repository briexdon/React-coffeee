import HeaderMainPage from "./header/header-main-page";
import AboutUs from "./about/about-main-page";
import OurBest from "./our-best/our-best-main-page";
import Footer from "../footer/footer";

// import OurCoffeePage from "../our-coffee-page/our-cofee-page";
// import ForYourPleasurePage from "../for-your-pleasure-page/for-your-pleasure-page";

// import { BrowserRouter, Routes, Route } from "react-router-dom";

function MainPage() {
  return (
    <>
      <HeaderMainPage></HeaderMainPage>
      <AboutUs></AboutUs>
      <OurBest></OurBest>
      <Footer></Footer>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/OurCoffee" element={<OurCoffeePage></OurCoffeePage>}></Route>
          <Route
            path="/ForYourPleasure"
            element={<ForYourPleasurePage></ForYourPleasurePage>}
          ></Route>
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default MainPage;
