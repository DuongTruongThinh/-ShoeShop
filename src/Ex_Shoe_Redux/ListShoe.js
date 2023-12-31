import React, { Component } from "react";
import ItemShoe from "./ItemShoe";
import { connect } from "react-redux";

class ListShoe extends Component {
  renderListShoe = () => {
    return this.props.shoeArr.map((item, index) => {
      return (
        <ItemShoe
          handleAddToCart={this.props.handleAddToCart}
          item={item}
          key={index}
        ></ItemShoe>
      );
    });
  };
  render() {
    return <div className="col-6 row">{this.renderListShoe()}</div>;
  }
}
//shoeArr
let mapStateToProps = (state) => {
  return {
    shoeArr: state.shoeReducer.shoeArr,
  };
};
export default connect(mapStateToProps)(ListShoe);
