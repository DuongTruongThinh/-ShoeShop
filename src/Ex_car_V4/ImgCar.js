import React, { Component } from "react";

export default class ImgCar extends Component {
  render() {
    // let { imgPath } = this.props;
    return <img src={this.props.imgPath} alt="" className="col-4" />;
  }
}
