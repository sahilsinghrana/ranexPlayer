import App from "./App.jsx";
import globalStore from "./store";

import {Provider} from "jotai";
import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={globalStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
