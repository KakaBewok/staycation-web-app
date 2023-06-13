import React from "react";
import InputDate from "elements/Form/InputDate";

class TestInput extends React.Component {
  state = {
    value: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <InputDate
        max={30}
        onChange={this.handleChange}
        name='value'
        value={this.state.value}
      />
    );
  }
}

export default TestInput;
