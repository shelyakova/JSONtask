import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";

import { createStore } from "redux";

function playlist(state = [], action) {
  if (action.type === "ADD_TRACK") {
    return [...state, action.payload];
  }
  console.log("STATE", state);
  return state;
}
console.log("STORE", store);
const store = createStore(playlist);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
