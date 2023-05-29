import React, { useRef, useEffect } from "react";
import Header from "parts/Header";
import Hero from "parts/Hero";
import MostPicked from "parts/MostPicked";
import landingPage from "../json/landingPage.json";
import Categories from "parts/Categories";

const LandingPage = (props) => {
  const refMostPicked = useRef();

  // useEffect(() => {}, []);

  return (
    <>
      <Header {...props} />
      <Hero refMostPicked={refMostPicked} data={landingPage.hero} />
      <MostPicked refMostPicked={refMostPicked} data={landingPage.mostPicked} />
      <Categories data={landingPage.categories} />
    </>
  );
};

export default LandingPage;
