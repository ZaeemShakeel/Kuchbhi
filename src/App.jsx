import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Hero from "./components/Hero";
import PopularCategories from "./components/PopularCategories";
import ShopCards from "./components/ShopCards";
import QuickLinks from "./components/QuickLinks";
import LastSection from "./components/LastSection";
import Footer from "./components/Footer";
import DynamicData from "./components/DynamicData";

function App() {
  return (
    <>
      <Header />
      {/* <Categories /> */}
      <Hero />
      <PopularCategories />
      <ShopCards />
      <DynamicData
        category="electronics"
        title="Explore Electronic Ads in Pakistan"
      />
      <DynamicData category="mobiles" title="Explore Mobile Ads in Pakistan" />
      {/* <QuickLinks /> */}
      <LastSection />
      <Footer />
    </>
  );
}

export default App;
