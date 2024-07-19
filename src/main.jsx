import FullAppLoader from "./components/Loaders/FullAppLoader";
import globalStore from "./store";
import {lazyWithRetry} from "./utils/reactLazy";

import {Provider} from "jotai";
import React, {Suspense} from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import {BrowserRouter} from "react-router-dom";

const App = lazyWithRetry(() => import("./App.jsx"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={globalStore}>
      <BrowserRouter basename={import.meta.env.VITE_BASE_URL}>
        <Suspense fallback={FullAppLoader}>
          <App />
        </Suspense>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
