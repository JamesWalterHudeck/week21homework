import React from "react";
import "./style.css";

// This component exports a jumbotron component
function Jumbotron({ children }) {
  return <div className="jumbotron mt-4">{children}</div>;
}

export default Jumbotron;
