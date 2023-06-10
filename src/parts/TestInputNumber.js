import React from "react";
import Number from "elements/Form/InputNumber";

class TestInputNumber extends React.Component {
  state = {
    value: 1,
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
        suffix=' night'
        isSuffixPlural
        value={this.state.value}
      />
    );
  }
}

export default TestInputNumber;
