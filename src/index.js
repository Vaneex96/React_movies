import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./components/app/App";
import store from "./store/index";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
