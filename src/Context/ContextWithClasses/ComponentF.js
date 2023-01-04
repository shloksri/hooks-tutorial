import React, { Component } from "react";
import { UserConsumer } from "./userContext";
export default class ComponentF extends Component {
  render() {
    return (
      <UserConsumer>
        {(userName) => {
          return <div>Hello {userName}</div>;
        }}
      </UserConsumer>
    );
  }
}
