import React, { Component } from "react";
import CartShoe from "./CartShoe";
import ListShoe from "./ListShoe";
import DetailShoe from "./DetailShoe";
import { TANG_SO_LUONG, shoeArr } from "./data";

export default class Ex_Shoe_Redux extends Component {
  state = { shoeArr: [], cart: [], detail: {} };
  handleAddToCart = (shoe) => {
    let cloneCart = this.state.cart;
    let index = cloneCart.findIndex((item) => {
      return item.id == shoe.id;
    });
    if (index == -1) {
      let newShoe = { ...shoe, soLuong: 1 };
      cloneCart.push(newShoe);
    } else {
      cloneCart[index].soLuong++;
    }
    this.setState({ cart: cloneCart });
    //TH1: sp chưa có trong giỏ hàng: tìm bằng findIndex => tạo obj mới có thêm key soluong:1=>push;
    //TH2: sp đã có trong giỏ => update key soLuong +1;
  };
  handleRemove = (idShoe) => {
    console.log("🚀 ~ file: Ex_Shoe.js:27 ~ Ex_Shoe ~ idShoe:", idShoe);
    let cloneCart = this.state.cart;
    let index = cloneCart.findIndex((item) => {
      return item.id == idShoe;
    });
    cloneCart.splice(index, 1);
    this.setState({ cart: cloneCart });
  };
  handleChangeQuantity = (idShoe, option) => {
    let cloneCart = this.state.cart;
    let index = cloneCart.findIndex((item) => {
      return item.id == idShoe;
    });
    if (option == TANG_SO_LUONG) {
      cloneCart[index].soLuong++;
    } else {
      cloneCart[index].soLuong--;
      cloneCart[index].soLuong == 0 && this.handleRemove(idShoe);
    }
    this.setState({ cart: cloneCart });
  };
  render() {
    return (
      <div>
        <div className="row">
          <CartShoe
            handleChangeQuantity={this.handleChangeQuantity}
            handleRemove={this.handleRemove}
            // cart={this.state.cart}
          ></CartShoe>
          <ListShoe
            list={this.state.shoeArr}
            handleAddToCart={this.handleAddToCart}
          ></ListShoe>
        </div>
        <DetailShoe></DetailShoe>
      </div>
    );
  }
}
