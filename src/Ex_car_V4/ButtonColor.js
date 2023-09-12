import React, { Component } from "react";

export default class ButtonColor extends Component {
  render() {
    let { color, activeColor } = this.props;
    let isActive = color == activeColor;
    return (
      <button
        onClick={() => {
          this.props.handleChange(color);
        }}
        className="btn mx-3 text-white"
        style={{
          background: color,
          transform: `scale(${isActive ? 1.5 : 1})`,
          transition: "3s",
        }}
      >
        {color}
      </button>
    );
  }
}
