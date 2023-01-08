import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import MainPage from "./Components/main-page/main-page";
import OurCoffeePage from "./Components/our-coffee-page/our-cofee-page";
import CoffeeItemPage from "./Components/coffee-item-page/coffee-item-page";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <MainPage></MainPage> */}
    {/* <OurCoffeePage></OurCoffeePage> */}
    <CoffeeItemPage></CoffeeItemPage>
  </React.StrictMode>
);
