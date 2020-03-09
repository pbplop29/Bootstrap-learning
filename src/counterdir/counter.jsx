//This is the most primitive building block file that is used in other jsx files and then imported in js files to be executed.

import React, { Component } from "react";
class Counter extends Component {
  //defined a class counter
  state = {
    value: this.props.value
    //made use of the props feature so as to assign a value to the variable value which is given by the state of counters.jsx  file.
    //Line 22 col 10 of counters.jsx
    //<Counter key={counter.id} ///value///={counter.value}>
    //the value between /// /// is the value used here. because if we change the value as any variable lets say X={counter.value},, we'll do value:this.props.X
  };
  clickI = product => {
    this.setState({ value: this.state.value + 1 });
    //stated a function to increase the value by on that will be used as a className --> onClick for the event of clicking the increase button
  };
  clickD = () => {
    return this.state.value > 0
      ? this.setState({ value: this.state.value - 1 })
      : "Nothing";
    //stated a function to decrease the value by on that will be used as a className --> onClick for the event of clicking the decrease button
    //also added a condition such that the value displayed will never go below zero.
    //I still have confusion with how the "Nothing" part is working but i will figure out soon about the alerts and stuff and put it there such that if it goes below xero it will show an alert message.
  };
  hevalues() {
    return this.state.value === 0 ? "Zero" + " kg" : this.state.value + " kg";
    //stated a function to give a output of the value + " kg" st it will give "Zero" if valye ===0 or else it will return the present value given by this.state.value
  }
  colorCorrection() {
    return this.state.value <= 0
      ? "btn-block text-warning badge-danger"
      : "btn-block text-light badge-success";
    //stated a function to determine the color of the badge such that if its negative value it gives a diff value and diff for positive or zero
  }

  render() {
    return (
      <div className="text-center">
        {this.props.children}
        <span className="text-warning badge-block badge-link badge-lg">
          Click increase to increase the kilograms of product you will buy.
          &nbsp; &nbsp; &nbsp;&nbsp;Click Decrease to decrease the kilograms of
          product you will buy.
        </span>
        <span className={this.colorCorrection()}>{this.hevalues()}</span>
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
      //in div --> aligned everything at center
      //{this.props.children} is the result of having jsx command in between the counter module inserted between the <div> of counters.jsx file.
      //            <Counter key={counter.id} value={counter.value}>
      //            <h1>Counter {counter.id}</h1>                                     --------->basically this instance
      //      in case i had <h1> yoyohoneysingh </h1> here ,,, the use of {this.props.children} would have inserted yoyohoneysingh everywhere it appeared.
      //            </Counter>
      //1st <span> is nothing but a badge to message about the functionality
      //2nd <span> just uses the colorCorrection() function and the heValues() functions to give the output of value with correspoding color
      //<button> these are given with classnames for appearance and onclicks for the event handling
      //&nsbp; provides spaces between buttons by a small margin
    );
  }
}

export default Counter;
