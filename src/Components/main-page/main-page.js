import { Component } from "react";
import HeaderMainPage from "./header/header-main-page";
import AboutUs from "./about/about-main-page";

class MainPage extends Component {
  render() {
    return (
      <>
        <HeaderMainPage></HeaderMainPage>
        <AboutUs></AboutUs>
      </>
    );
  }
}

export default MainPage;
