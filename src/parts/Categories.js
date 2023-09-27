import React from "react";
import Button from "elements/Button";
import Fade from "react-reveal/Fade";
import "dotenv/config";

const Categories = ({ data }) => {
  return data.map((category, index) => {
    if (category.itemId.length === 0) return null;
    return (
      <section className="container" key={`category-${index + 1}`}>
        <Fade bottom>
          <h4 className="mb-3 font-weight-medium">{category.name}</h4>
          <div className="container-grid">
            {category.itemId.map((item, index) => {
              return (
                <div
                  className="item column-3 row-1"
                  key={`category-${index + 1}-item-${index + 2}`}
                >
                  <Fade bottom delay={index * 350}>
                    <div className="card">
                      {item.isPopular && (
                        <div className="tag">
                          Popular{" "}
                          <span className="font-weight-light">Choice</span>
                        </div>
                      )}
                      <figure className="img-wrapper" style={{ height: 180 }}>
                        <img
                          src={`${process.env.REACT_APP_HOST}/${item.imageId[index].imageUrl}`}
                          alt={item.title}
                          className="img-cover"
                        />
                      </figure>
                      <div className="meta-wrapper">
                        <Button
                          type="link"
                          className="stretched-link d-block text-gray-800"
                          href={`/properties/${item._id}`}
                        >
                          <div className="h4">{item.name}</div>
                        </Button>
                        <span className="text-gray-500">
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
    );
  });
};

export default Categories;
