import React from "react";
import Button from "elements/Button";
import Fade from "react-reveal/Fade";
import "dotenv/config";

const MostPicked = ({ refMostPicked, data }) => {
  return (
    <>
      <section className="container" ref={refMostPicked}>
        <Fade bottom>
          <h4 className="mb-3">Most Picked</h4>
          <div className="container-grid">
            {data.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`item column-4${
                    index === 0 ? " row-2" : " row-1"
                  }`}
                >
                  <Fade bottom delay={index * 500}>
                    <div className="card card-featured">
                      <div className="tag">
                        $ {item.price}
                        <span className="font-weight-light">
                          per {item.unit}
                        </span>
                      </div>
                      <figure className="img-wrapper">
                        <img
                          className="img-cover"
                          src={`${process.env.REACT_APP_HOST}/${item.imageId[0].imageUrl}`}
                          alt={item.title}
                        />
                      </figure>
                      <div className="meta-wrapper">
                        <Button
                          className="strech-link d-block text-white"
                          type="link"
                          href={`/properties/${item._id}`}
                        >
                          <h5>{item.title}</h5>
                        </Button>
                        <span>
                          {item.city}, {item.country}
                        </span>
                      </div>
                    </div>
                  </Fade>
                </div>
              );
            })}
          </div>
        </Fade>
      </section>
    </>
  );
};
export default MostPicked;
