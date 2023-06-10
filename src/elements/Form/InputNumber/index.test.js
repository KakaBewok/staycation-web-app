/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */
import React, { Component } from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; // import toBeInTheDocument
import Number from "./index";

class TestInput extends Component {
  state = {
    value: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Number
        max={30}
        onChange={this.handleChange}
        name='value'
        value={this.state.value}
      />
    );
  }
}

export default TestInput;

const setup = () => {
  const { container } = render(<TestInput />);
  const input = container.querySelector(`input.form-control[name='value']`);

  return {
    input,
  };
};

test("Should able to change value", () => {
  const { input } = setup();

  fireEvent.change(input, { target: { value: 23 } });
  expect(input.value).toBe("23");
});

test("Should not be able to change when reach max value", () => {
  const { input } = setup();

  fireEvent.change(input, { target: { value: 33 } });
  expect(input.value).toBe("");
});
