import React, { Component } from "react";

export default class UserProfile extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <div className="card text-left">
          <img className="card-img-top" src="holder.js/100px180/" alt />
          <div className="card-body">
            <h4 className="card-title">{this.props.title}</h4>
            <p className="card-text display-4 text-info">
              {this.props.userName}
            </p>
            <button
              onClick={this.props.handleChange}
              className="btn btn-danger"
            >
              Change
            </button>
          </div>
        </div>
      </div>
    );
  }
}
// Đưa user vào state
// viết 1 hàm setState
// state ở đâu setState ở đó
