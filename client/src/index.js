import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router } from "react-router-dom";
import { App } from "./app";

import axios from "axios";

const root = document.getElementById("root");

function getResource(config) {
  const baseURL = "https://jsonplaceholder.typicode.com/";
  return axios({
    method: config.method,
    url: `${baseURL}${config.url}`,
  }).then((response) => {
    return response.data;
  });
}

console.log(getResource({ method: "get", url: "posts" }));

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  root
);
