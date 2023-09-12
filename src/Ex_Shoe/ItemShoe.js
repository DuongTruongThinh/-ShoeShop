import React, { Component } from "react";

export default class ItemShoe extends Component {
  render() {
    let { image, name } = this.props.item;
    return (
      <div className="card text-left col-3">
        <img className="card-img-top" src={image} />
        <div className="card-body p-0">
          <small className="card-title">{name}</small>
          <div className="row">
            <button
              onClick={() => {
                this.props.handleAddToCart(this.props.item);
              }}
              className="btn btn-primary mx-3"
            >
              Add
            </button>
            <button className="btn btn-info">View</button>
          </div>
        </div>
      </div>
    );
  }
}
