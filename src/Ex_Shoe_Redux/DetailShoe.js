import React, { Component } from "react";
import { connect } from "react-redux";

export class DetailShoe extends Component {
  render() {
    let { image } = this.props.detail;
    return (
      <div>
        <img src={image} alt="" />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    detail: state.shoeReducer.detail,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps)(DetailShoe);
