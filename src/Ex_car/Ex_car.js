import React, { Component } from "react";

export default class Ex_car extends Component {
  state = { color: "black" };
  handleChangeColor = (color) => {
    this.setState({ color: color });
  };
  render() {
    let imgPath = `./resource/CarBasic/products/${this.state.color}-car.jpg`;
    return (
      <div className="row">
        <img src={imgPath} alt="" className="col-4" />
        <div className="col-8 mt-5">
          <button
            onClick={() => {
              this.handleChangeColor("black");
            }}
            className="btn btn-danger"
          >
            Black
          </button>
          <button
            onClick={() => {
              this.handleChangeColor("red");
            }}
            className="btn btn-dark mx-5"
          >
            Red
          </button>
          <button
            onClick={() => {
              this.handleChangeColor("silver");
            }}
            className="btn btn-secondary"
          >
            Silver
          </button>
        </div>
      </div>
    );
  }
}
// đường dẫn từ file index.html
