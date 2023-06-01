import React from "react";
import PropTypes from "prop-types";

const Star = ({ className, value, height, width, spacing }) => {
  const decimals = Number(value) % 1;
  const star = [];
  let leftPosition = 0;

  for (let index = 0; index < 5 && index < value - decimals; index++) {
    leftPosition = leftPosition + width;

    //u/ bintang berwarna
    star.push(
      <div
        className='star'
        key={`star-${index}`}
        style={{
          left: index * width,
          width: width,
          marginRight: spacing,
        }}></div>
    );
  }

  if (decimals > 0 && value <= 5) {
    <div
      className='star'
      //   key={`star-${index}`}
      style={{
        left: leftPosition,
        width: width - spacing,
      }}></div>;
  }

  const starPlaceholder = [];
  for (let index = 0; index < 5; index++) {
    starPlaceholder.push(
      <div
        className='star placeholder'
        key={`starPlaceholder-${index}`}
        style={{
          left: index * width,
          width: width,
          marginRight: spacing,
        }}></div>
    );
  }

  return (
    <>
      <div
        className={["starts", className].join(" ")}
        style={{ height: height }}>
        {starPlaceholder}
        {star}
      </div>
    </>
  );
};

Star.protoTypes = {
  className: PropTypes.string,
  value: PropTypes.oneOf(["button", "link"]),
  height: PropTypes.func,
  width: PropTypes.string,
  spacing: PropTypes.string,
};

export default Star;
