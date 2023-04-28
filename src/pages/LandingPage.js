import React from 'react';
import Header from 'parts/Header';
import Hero from 'parts/Hero';
import MostPicked from 'parts/MostPicked';
import landingPage from '../json/landingPage.json';

const LandingPage = (props) => {
  return (
    <>
      <Header {...props} />
      <Hero data={landingPage.hero} />
      <MostPicked data={landingPage.mostPicked} />
    </>
  );
};

export default LandingPage;
