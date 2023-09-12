import React, { Component } from "react";
import Header from "./Header";
import Navigate from "./Navigate";
import Content from "./Content";
import Footer from "./Footer";

export default class ExLayout extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <div className="row">
          <div className="col-4 p-0">
            <Navigate></Navigate>
          </div>
          <div className="col-8 p-0">
            <Content></Content>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}
