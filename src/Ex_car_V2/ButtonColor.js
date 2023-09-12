import React, { Component } from "react";

export default class ButtonColor extends Component {
  render() {
    let { color } = this.props;
    return (
      <button
        onClick={() => {
          this.props.handleChange(color);
        }}
        className="btn mx-3 text-white"
        style={{ background: color }}
      >
        {color}
      </button>
    );
  }
}
