import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import MainPage from "./Components/main-page/main-page";
import OurCoffeePage from "./Components/our-coffee-page/our-cofee-page";
import ForYourPleasurePage from "./Components/for-your-pleasure-page/for-your-pleasure-page";
import CoffeeItem from "./Components/coffee-item-page/coffee-item-page";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/OurCoffee" element={<OurCoffeePage />} />
        <Route path="/ForYourPleasure" element={<ForYourPleasurePage />} />
        <Route path="/coffee-item" element={<CoffeeItem />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
