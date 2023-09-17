import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Fade from "react-reveal/Fade";
import Header from "parts/Header";
import Button from "elements/Button";
import Stepper, {
  Numbering,
  Meta,
  MainContent,
  Controller,
} from "elements/Stepper";
import BookingInformation from "parts/Checkout/BookingInformation";
import Payment from "parts/Checkout/Payment";
import Completed from "parts/Checkout/Completed";
import ItemDetails from "json/itemDetails";

const Checkout = (props) => {
  const checkout = useSelector((state) => state.checkout);

  const initialData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    proofPayment: "",
    bankName: "",
    bankHolder: "",
  };
  const [data, setData] = useState(initialData);

  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    window.scroll(0, 0);
    document.title = "Staycation | Checkout";
    return () => (document.title = "Staycation");
  }, []);

  const _Submit = (nextStep) => {
    alert("Success");
    nextStep();
  };

  if (!checkout)
    return (
      <div className="container">
        <div
          className="row align-items-center justify-content-center text-center"
          style={{ height: "100vh" }}
        >
          <div className="col-3">
            Pilih kamar dulu
            <div>
              <Button
                className="btn mt-5"
                type="button"
                onClick={() => props.history.goBack()}
                isLight
              >
                Back
              </Button>
            </div>
          </div>
        </div>
      </div>
    );

  const steps = {
    bookingInformation: {
      title: "Booking Information",
      description: "Please fill up the blank fields below",
      content: (
        <BookingInformation
          data={data}
          checkout={checkout}
          ItemDetails={ItemDetails}
          onChange={onChange}
        />
      ),
    },
    payment: {
      title: "Payment",
      description: "Kindly follow the instructions below",
      content: (
        <Payment
          data={data}
          ItemDetails={ItemDetails}
          checkout={checkout}
          onChange={onChange}
        />
      ),
    },
    completed: {
      title: "Yay! Completed",
      description: null,
      content: <Completed />,
    },
  };

  return (
    <>
      {/* HEADER OF CHECKOUT PAGE */}
      <Header isCentered />

      <Stepper steps={steps} initialStep="bookingInformation">
        {(prevStep, nextStep, CurrentStep, steps) => (
          <>
            {/* ICON STEPPER */}
            <Numbering
              data={steps}
              current={CurrentStep}
              style={{ marginBottom: 50 }}
            />
            {/* TEXT INFO */}
            <Meta data={steps} current={CurrentStep} />
            {/* MENU (BOOKING, PAYMENT, COMPLETED) */}
            <MainContent data={steps} current={CurrentStep} />

            {CurrentStep === "bookingInformation" && (
              <Controller>
                {data.firstName !== "" &&
                  data.lastName !== "" &&
                  data.email !== "" &&
                  data.phone !== "" && (
                    <Fade>
                      <Button
                        className="btn mb-3"
                        type="button"
                        isBlock
                        isPrimary
                        hasShadow
                        onClick={nextStep}
                      >
                        Continue to Book
                      </Button>
                    </Fade>
                  )}
                <Button
                  className="btn"
                  type="link"
                  isBlock
                  isLight
                  href={`/properties/${checkout._id}`}
                >
                  Cancel
                </Button>
              </Controller>
            )}

            {CurrentStep === "payment" && (
              <Controller>
                {data.proofPayment !== "" &&
                  data.bankName !== "" &&
                  data.bankHolder !== "" && (
                    <Fade>
                      <Button
                        className="btn mb-3"
                        type="button"
                        isBlock
                        isPrimary
                        hasShadow
                        onClick={() => _Submit(nextStep)}
                      >
                        Continue to Book
                      </Button>
                    </Fade>
                  )}
                <Button
                  className="btn"
                  type="button"
                  isBlock
                  isLight
                  onClick={prevStep}
                >
                  Cancel
                </Button>
              </Controller>
            )}

            {CurrentStep === "completed" && (
              <Controller>
                <Button
                  className="btn"
                  type="link"
                  isBlock
                  isPrimary
                  hasShadow
                  href=""
                >
                  Back to Home
                </Button>
              </Controller>
            )}
          </>
        )}
      </Stepper>
    </>
  );
};

export default Checkout;
