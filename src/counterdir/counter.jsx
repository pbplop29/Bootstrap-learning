import React, { Component } from "react";
class Counter extends Component {
  state = {};
  render() {
    return (
      <div className="text-right">
        <h1 className=" text-right btn btn-block btn-warning btn-sm">Hello</h1>
        <button className=" btn-warning disabled">Increase</button>
        <button className=" btn-outline-info btn-lg ">Decrease</button>
        <badge className="btn btn-block btn-success text-left">
          success duihhh!!!!
        </badge>
      </div>
    );
  }
}

export default Counter;
