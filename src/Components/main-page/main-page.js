import HeaderMainPage from "./header/header-main-page";
import AboutUs from "./about/about-main-page";
import OurBest from "./our-best/our-best-main-page";
import Footer from "../footer/footer";

import { Component } from "react";

class MainPage extends Component {
  render() {
    return (
      <>
        <HeaderMainPage></HeaderMainPage>
        <AboutUs></AboutUs>
        <OurBest></OurBest>
        <Footer></Footer>
      </>
    );
  }
}

export default MainPage;
