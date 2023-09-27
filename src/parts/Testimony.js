import React from "react";
import "dotenv/config";
// import Fade from "react-reveal/Fade";

import Star from "elements/star";
import Button from "elements/Button";
import TestimonyAccent from "assets/images/frame-testimonial2.jpg";
import Fade from "react-reveal/Fade";

const Testimony = ({ data }) => {
  return (
    <Fade bottom>
      <section className="container">
        <div className="row align-items-center">
          {/* left */}
          <div className="col-auto" style={{ marginRight: 60 }}>
            <div
              className="testimonial-hero"
              style={{ margin: `30px 0 0 30px` }}
            >
              <img
                src={`${process.env.REACT_APP_HOST}/${data.imageUrl}`}
                alt="Testimonial"
                className="position-absolute"
                style={{ zIndex: 1 }}
              />
              <img
                src={TestimonyAccent}
                alt="Testimonial frame"
                className="position-absolute"
                style={{ margin: `-30px 0 0 -30px` }}
              />
            </div>
          </div>
          {/* right */}
          <div className="col">
            <h4 style={{ marginBottom: 40 }}>Testimoni</h4>
            <Star value={data.rate} width={35} height={35} spacing={4} />
            <h5 className="h2 font-weight-light line-height-2 my-3">
              {data.content}
            </h5>
            <span className="text-gray-500">
              {data.familyName}, {data.familyOccupation}
            </span>

            <div>
              <Button
                className="btn px-5"
                style={{ marginTop: 40 }}
                hasShadow
                isPrimary
                type="link"
                href={`/testimonial/${data._id}`}
              >
                Read Their Story
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default Testimony;
