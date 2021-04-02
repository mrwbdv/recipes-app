import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import { Routes } from "./routes";

import "./index.css";

export const App = () => {
  return (
    <>
      <CssBaseline />
      <Routes />
    </>
  );
};
