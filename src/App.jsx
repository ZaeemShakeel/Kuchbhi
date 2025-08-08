import { useState } from "react";
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
      {/* <ShopCards /> */}
      <DynamicData
        category="vehicles"
        title="Latest Free Ads Posted in Pakistan – Mobiles, Cars, Electronics & More"
      />
      <DynamicData
        category="electronics"
        title="Explore Electronic Ads in Pakistan"
      />
      <DynamicData
        category="furniture"
        title="Explore Furniture Ads in Pakistan"
      />
      <DynamicData category="mobile" title="Explore Mobile Ads in Pakistan" />
      <DynamicData category="fashion" title="Explore Mobile Ads in Pakistan" />
      {/* <QuickLinks /> */}
      <LastSection />
      <Footer />
    </>
  );
}

export default App;
