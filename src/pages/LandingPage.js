import React, { useRef, useEffect } from "react";
import Header from "parts/Header";
import Hero from "parts/Hero";
import MostPicked from "parts/MostPicked";
// import landingPage from "../json/landingPage.json";
import Categories from "parts/Categories";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";
import { useSelector, useDispatch } from "react-redux";
import { fetchLandingPageAction } from "store/reducer/landingPage/landingPageActions";

const LandingPage = (props) => {
  const landingPage = useSelector((state) => state.landingPage);
  const dispatch = useDispatch();

  console.log(landingPage.landingPage);

  const refMostPicked = useRef();

  useEffect(() => {
    window.title = "Staycation | Home";
    window.scrollTo(0, 0);

    if (!landingPage.page) {
      dispatch(
        fetchLandingPageAction(
          `${process.env.REACT_APP_HOST}/api/v1/member/landing-page`,
          "landingPage"
        )
      );
    }
  }, []);

  if (!landingPage.hasOwnProperty("landingPage"))
    return (
      <>
        <h1 style={{ textAlign: "center", marginTop: "55px" }}>Loading...</h1>
      </>
    );

  return (
    <>
      <Header {...props} />
      <Hero refMostPicked={refMostPicked} data={landingPage.landingPage.hero} />
      <MostPicked
        refMostPicked={refMostPicked}
        data={landingPage.landingPage.mostPicked}
      />
      <Categories data={landingPage.landingPage.category} />
      <Testimony data={landingPage.landingPage.testimonial} />
      <Footer />
    </>
  );
};

export default LandingPage;
