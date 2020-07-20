import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

//Imports our App from the app.js file in utils to render our site.
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
