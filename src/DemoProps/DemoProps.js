import React, { Component } from "react";
import UserProfile from "./UserProfile";
import { faker } from "@faker-js/faker";

export default class DemoProps extends Component {
  state = { userName: "Alice" };
  handleChangeName = () => {
    this.setState({ userName: faker.animal.cat() });
  };
  render() {
    return (
      <div>
        <h2>DemoProps</h2>
        <UserProfile
          handleChange={this.handleChangeName}
          title="thông tin người dùng"
          userName={this.state.userName}
        ></UserProfile>
      </div>
    );
  }
}
// props react js
// đưa username vào state
// viết hàm setState
// state ở đâu setstate ở đó
