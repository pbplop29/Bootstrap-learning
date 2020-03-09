import React, { Component } from "react";
import Counter from "./counter";
//Here i imported the counter file present in the same directory as the counters.jsx file so that it can be used below in the return part so as to return multiple ones of them by mapping them to different instances f the state property.

class Counters extends Component {
  //Here i creasted a class Counters that i will be importing in the index.js file.
  state = {
    counters: [
      { id: "Mango", value: 0 },
      { id: "Apple", value: 0 },
      { id: "Potato", value: 0 },
      { id: "Tomato", value: 0 },
      { id: "Onion", value: 0 },
      { id: "Peaches", value: 0 }
      //Here i just created a state class called counters and provided different instances to it, each having its separate value and id tag, which can later be used and called accordingly using the this.props module.
    ]
  };
  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter key={counter.id} value={counter.value}>
            <h1>Counter {counter.id}</h1>
          </Counter>
          // Here I am mapping each instance form the counters state intyo a different counter each having its own id corresponding to the id of ocunters giver by counter.id and similarly the value.
          //the <h1> is included such that it will come in between different counter modules imported into this from the initial counter.jsx file.
        ))}
      </div>
    );
  }
}

export default Counters;
