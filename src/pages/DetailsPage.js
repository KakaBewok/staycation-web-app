import React, { useEffect } from "react";
import Header from "parts/Header";
import PageDetailTitle from "parts/PageDetailTitle";
import ItemDetails from "json/itemDetails";
import FeaturedImage from "parts/FeaturedImage";
import PageDetailDescription from "parts/PageDetailDescription";
import BookingForm from "parts/BookingForm";
import Categories from "parts/Categories";
import Testimony from "parts/Testimony";
import Fade from "react-reveal/Fade";

const DetailsPage = (props) => {
  useEffect(() => {
    window.title = "Staycation | Details Page";
    window.scrollTo(0, 0);

    return () => {
      window.title = "Staycation";
    };
  }, []);

  const breadcrumb = [
    { pageTitle: "Home", pageHref: "" },
    { pageTitle: "House Details", pageHref: "" },
  ];

  return (
    <>
      <Header {...props} />
      <PageDetailTitle breadcrumb={breadcrumb} data={ItemDetails} />
      <FeaturedImage data={ItemDetails.imageUrls} />

      <section className="container">
        <div className="row">
          <div className="col-7 pr-5">
            <Fade bottom>
              <PageDetailDescription data={ItemDetails} />
            </Fade>
          </div>
          <div className="col-5">
            <Fade bottom>
              <BookingForm itemDetails={ItemDetails} />
            </Fade>
          </div>
        </div>
      </section>
      <Categories data={ItemDetails.categories} />
      <Testimony data={ItemDetails.testimonial} />
    </>
  );
};

export default DetailsPage;
