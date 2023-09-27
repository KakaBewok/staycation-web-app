import React from "react";
import HeroImage from "../assets/images/hero-image.jpg";
import FrameHeroImage from "../assets/images/frame-hero-image.jpg";
import IconCities from "../assets/images/icons/svg/ic_cities.svg";
import IconTraveler from "../assets/images/icons/svg/ic_traveler.svg";
import IconTreasures from "../assets/images/icons/svg/ic_treasure.svg";
import Button from "elements/Button";
import numberFormat from "utils/formatNumber";
import Fade from "react-reveal/Fade";

const Hero = (props) => {
  const { refMostPicked, data } = props;

  const showMostPicked = () => {
    window.scrollTo({
      top: refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Fade bottom>
        <section className="container pt-4">
          <div className="row align-items-center">
            {/* content hero */}
            <div className="col-auto pr-5" style={{ width: 530 }}>
              <h1 className="font-weight-bold line-height-1 mb-3">
                Forget Busy Work <br />
                Start Next Vacation
              </h1>
              <p
                className="mb-4 font-weight-light text-gray-500 w-75"
                style={{ lineHeight: "170%" }}
              >
                We provide what you need to enjoy your holiday with family. Time
                to make another memorable moments.
              </p>
              <Button
                className="btn px-5"
                hasShadow
                isPrimary
                onClick={showMostPicked}
              >
                Show Me Now
              </Button>
              {/* icons */}
              <div className="row" style={{ marginTop: 80 }}>
                {/* travelers */}
                <div className="col-auto" style={{ marginRight: 35 }}>
                  <img
                    width="36"
                    height="36"
                    src={IconTraveler}
                    alt={`${data.travelers} Travelers`}
                  />
                  <h6 className="mt-3">
                    {numberFormat(data.travelers)}
                    <span className="text-gray-500 font-weight-light">
                      {" "}
                      Travelers
                    </span>
                  </h6>
                </div>
                {/* treasures */}
                <div className="col-auto" style={{ marginRight: 35 }}>
                  <img
                    width="36"
                    height="36"
                    src={IconTreasures}
                    alt={`${data.treasures} Treasures`}
                  />
                  <h6 className="mt-3">
                    {numberFormat(data.treasures)}
                    <span className="text-gray-500 font-weight-light">
                      {" "}
                      Treasures
                    </span>
                  </h6>
                </div>
                {/* cities */}
                <div className="col-auto">
                  <img
                    width="36"
                    height="36"
                    src={IconCities}
                    alt={`${data.cities} Cities`}
                  />
                  <h6 className="mt-3">
                    {numberFormat(data.cities)}
                    <span className="text-gray-500 font-weight-light">
                      {" "}
                      Cities
                    </span>
                  </h6>
                </div>
              </div>
            </div>

            {/* image hero */}
            <div className="col-6 pl-5">
              <div style={{ width: 520, height: 410 }}>
                <img
                  src={HeroImage}
                  alt="Room with couches"
                  className="img-fluid position-absolute"
                  style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}
                />
                <img
                  src={FrameHeroImage}
                  alt="Room with couches"
                  className="img-fluid position-absolute"
                  style={{ margin: "0 -15px -15px 0" }}
                />
              </div>
            </div>
          </div>
        </section>
      </Fade>
    </>
  );
};

export default Hero;
