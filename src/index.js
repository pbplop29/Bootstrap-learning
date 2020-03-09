import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import Counters from "./counterdir/counters";
//Here I just imported the ocunters jsx file which i s supposed to be the module file containing multiple no of counter jsx files which basically increases the number of displays present in counter.jsx
//Earlier i had counter fiule only and not counters file because i was not using multiple ones. But since i am including multiple of them i had to create a different jsx file and then import and render it.
ReactDOM.render(<Counters />, document.getElementById("root"));
//Here i am basically rendering the counters file that i imported.

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
