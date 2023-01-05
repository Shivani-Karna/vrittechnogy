import React, { Component } from "react";

export default class Child extends Component {
  // componentWillUnmount(){
  // alert(" The component named child is about to be unmounted");

  // }

  render() {
    console.log(this, "test this");
    // return <h1>Hello I am a React Developer!!</h1>
    return <>{this.props.countDown}</>;
  }
}
