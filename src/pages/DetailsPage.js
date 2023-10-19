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
import { useSelector, useDispatch } from "react-redux";
import { fetchDetailPageAction } from "store/reducer/detailPage/detailPageActions";

const DetailsPage = (props) => {
  const detailPage = useSelector((state) => state.detailPage);
  const dispatch = useDispatch();

  console.log(props);
  console.log(props.match.params.id);
  console.log(detailPage.detailPage);

  useEffect(() => {
    window.title = "Staycation | Details Page";
    window.scrollTo(0, 0);

    // if (!detailPage.page[props.match.params.id]) {
    dispatch(
      fetchDetailPageAction(
        `${process.env.REACT_APP_HOST}/api/v1/member/detail-page/` +
          props.match.params.id.toString(),
        "detailPage"
      )
    );
    // }

    // return () => {
    //   window.title = "Staycation";
    // };
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
