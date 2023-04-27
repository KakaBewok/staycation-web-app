import React from 'react';
import Header from 'parts/Header';
import Hero from 'parts/Hero';
import landingPage from '../json/landingPage.json';

const LandingPage = (props) => {
  return (
    <>
      <Header {...props}></Header>
      <Hero data={landingPage.hero}></Hero>
      {/* <Hero></Hero> */}
    </>
  );
};

export default LandingPage;
