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

function App() {
  return (
    <>
      <Header />
      <Categories />
      <Hero />
      <PopularCategories />
      <ShopCards />
      {/* <QuickLinks /> */}
      <LastSection />
      <Footer />
    </>
  );
}

export default App;
