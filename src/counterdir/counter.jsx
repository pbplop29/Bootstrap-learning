import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0
  };
  //constructor() {
  // super();
  // this.clickI = this.clickI.bind(this);
  //}
  clickI = product => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };
  clickD = () => {
    this.setState({ count: this.state.count - 1 });
  };
  heCounts() {
    return this.state.count === 0 ? "Zero" : this.state.count;
  }
  colorCorrection() {
    return this.state.count < 0
      ? "btn-block text-warning badge-danger"
      : "btn-block text-light badge-success";
  }
  //so comments
  //cannot
  //be
  //added
  //directly
  //wherever
  //but i will try

  render() {
    return (
      <div className="text-center">
        <span className="text=danger btn-block btn-info btn-disable">
          So this will be the heading and below it will be the buttons that will
          focus onm increment and stuff
        </span>
        <span className={this.colorCorrection()}>{this.heCounts()}</span>
        <button
          className="btn btn-success text-warning "
          onClick={() => this.clickI({ id: 1 })}
        >
          Increase
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button className="btn btn-dark text-danger " onClick={this.clickD}>
          Decrease
        </button>
      </div>
    );
  }
}

export default Counter;
