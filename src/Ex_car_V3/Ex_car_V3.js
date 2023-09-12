import React, { Component } from "react";
import ImgCar from "./ImgCar";
import ButtonColor from "./ButtonColor";

export default class Ex_car_V3 extends Component {
  state = { color: "black", colorArr: ["red", "black", "silver"] };
  handleChangeColor = (color) => {
    this.setState({ color: color });
  };
  renderButtonList = () => {
    return this.state.colorArr.map((item) => {
      return (
        <ButtonColor
          color={item}
          handleChange={this.handleChangeColor}
        ></ButtonColor>
      );
    });
  };
  render() {
    let imgPath = `./resource/CarBasic/products/${this.state.color}-car.jpg`;
    return (
      <div className="row">
        <ImgCar imgPath={imgPath}></ImgCar>
        {/* <img src={imgPath} alt="" className="col-4" /> */}
        <div className="col-8 mt-5">{this.renderButtonList()}</div>
      </div>
    );
  }
}
