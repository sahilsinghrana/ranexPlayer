import App from "./App.jsx";
import globalStore from "./store";

import {Provider} from "jotai";
import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={globalStore}>
      <BrowserRouter basename={import.meta.env.VITE_BASE_URL}>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
