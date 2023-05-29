import React from "react";
import Button from "elements/Button";

const Categories = ({ data }) => {
  return data.map((category, index) => {
    return (
      <section className='container' key={`category-${index + 1}`}>
        <h4 className='mb-3 font-weight-medium'>{category.name}</h4>
        <div className='container-grid'>
          {category.items.length == 0 ? (
            <div className='row'>
              <div className='col-auto align-items-center'>
                There is no property at this category
              </div>
            </div>
          ) : (
            category.items.map((item, index) => {
              return (
                <div
                  className='item column-3 row-1'
                  key={`category-${index + 1}-item-${index + 2}`}>
                  <div className='card'>
                    {item.isPopular && (
                      <div className='tag'>
                        Popular{" "}
                        <span className='font-weight-light'>Choice</span>
                      </div>
                    )}
                    <figure className='img-wrapper' style={{ height: 180 }}>
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className='img-cover'
                      />
                    </figure>
                    <div className='meta-wrapper'>
                      <Button
                        type='link'
                        className='stretched-link d-block text-gray-800'
                        href={`/properties/${item._id}`}>
                        <div className='h4'>{item.name}</div>
                      </Button>
                      <span className='text-gray-500'>
                        {item.city}, {item.country}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>
    );
  });
};

export default Categories;
