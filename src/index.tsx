import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const root: HTMLElement | null = document.getElementById("root");
ReactDOM.render(<App />, root);

serviceWorker.unregister();
