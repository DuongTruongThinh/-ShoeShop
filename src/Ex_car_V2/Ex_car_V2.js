import React, { Component } from "react";
import ImgCar from "./ImgCar";
import ButtonColor from "./ButtonColor";

export default class Ex_car_V2 extends Component {
  state = { color: "black" };
  handleChangeColor = (color) => {
    this.setState({ color: color });
  };
  render() {
    let imgPath = `./resource/CarBasic/products/${this.state.color}-car.jpg`;
    return (
      <div className="row">
        <ImgCar imgPath={imgPath}></ImgCar>
        {/* <img src={imgPath} alt="" className="col-4" /> */}
        <div className="col-8 mt-5">
          <ButtonColor
            color="black"
            handleChange={this.handleChangeColor}
          ></ButtonColor>
          <ButtonColor
            color="red"
            handleChange={this.handleChangeColor}
          ></ButtonColor>
          <ButtonColor
            color="silver"
            handleChange={this.handleChangeColor}
          ></ButtonColor>
        </div>
      </div>
    );
  }
}
