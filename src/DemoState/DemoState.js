import React, { Component } from "react";

export default class DemoState extends Component {
  state = { number: 1, userName: "Alice" };
  //   this state
  handleIncrease = () => {
    this.setState({ number: this.state.number + 1 }, () => {
      console.log(this.state.number);
    });
    console.log("Tăng");
  };
  handleDecrease = () => {
    console.log("Giảm");
    this.setState({ number: this.state.number + 1 });
  };
  handleChangeName = (name) => {
    this.setState({ userName: name });
  };
  //   event handling có tham số, không có tham số
  render() {
    return (
      <div className="text-center">
        <button onClick={this.handleDecrease} className="btn btn-danger">
          -
        </button>
        <span className="mx-5 display-5">{this.state.number}</span>
        <button onClick={this.handleIncrease} className="btn btn-success">
          +
        </button>
        <h2
          className={`display-5 ${
            this.state.userName == "Alice" ? "text-danger" : "text-info"
          }  `}
        >
          {this.state.userName}
        </h2>
        {/* Hàm có tham số bọc lại bằng arrow function */}
        <button
          onClick={() => {
            this.handleChangeName("Alice");
          }}
          className="btn btn-secondary"
        >
          Change to Alice
        </button>
        <button
          onClick={() => {
            this.handleChangeName("Bob");
          }}
          className="btn btn-danger"
        >
          Change to Bob
        </button>
      </div>
    );
  }
}
