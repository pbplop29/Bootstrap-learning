import React, { Component } from "react";
class Counter extends Component {
  state = {
    Roll: 15
  };
  render() {
    // this.colorBadge();

    return (
      <div className="text-right">
        <span className={this.colorBadge()}>{this.getRollItSelf()}</span>
        <h1 className="btn btn-outline-warning">Niyeti</h1>
        <button className=" btn-warning disabled">Increase</button>
        <button className=" btn-outline-info btn-lg ">Decrease</button>
        <badge className="btn btn-block btn-success text-left">
          success duihhh!!!!
        </badge>
      </div>
    );
  }
  getRollItSelf() {
    return this.state.Roll === 15 ? "Fifteen" : this.state.Roll;
  }

  colorBadge() {
    let checker = "btn btn-lg btn-";
    checker += this.state.Roll === 15 ? "success" : "dark";
    return checker;
  }
}

export default Counter;
