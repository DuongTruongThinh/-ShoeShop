import React, { Component } from "react";
import { GIAM_SO_LUONG, TANG_SO_LUONG } from "./data";
import { connect } from "react-redux";
import { UPDATE_QUANTITY } from "./constant/shoeConstant";

class CartShoe extends Component {
  renderCart = () => {
    let { cart } = this.props;
    return cart.map((item, index) => {
      let { name, price, image, soLuong, id } = item;
      return (
        <tr key={index}>
          <td>{name}</td>
          <td>{price}</td>
          <td>
            <img width={100} src={image} alt="" />
          </td>

          <td>
            <button
              className="btn btn-dark"
              onClick={() => {
                this.props.handleUpdateQuantity(id, GIAM_SO_LUONG);
              }}
            >
              -
            </button>
            <strong className="mx-3">{soLuong}</strong>
            <button
              className="btn btn-success"
              onClick={() => {
                this.props.handleUpdateQuantity(id, TANG_SO_LUONG);
              }}
            >
              +
            </button>
          </td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                this.props.handleRemove(id);
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="col-6">
        <table className="table">
          <thead>
            <th>Name</th>
            <th>Price</th>
            <th>Image</th>
            <th>Quantity</th>
            <th>Action</th>
          </thead>
          <tbody>{this.renderCart()}</tbody>
        </table>
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    cart: state.shoeReducer.cart,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    handleUpdateQuantity: (id, option) => {
      let action = {
        type: UPDATE_QUANTITY,
        payload: {
          id,
          option,
        },
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartShoe);