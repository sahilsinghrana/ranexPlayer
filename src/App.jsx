import FullAppLoader from "./components/Loaders/FullAppLoader";
import useSystemThemeListener from "./hooks/useSystemThemeListener";
import router from "./router";

import {Suspense} from "react";
import {RouterProvider} from "react-router-dom";

function App() {
  useSystemThemeListener();

  return (
    <>
      <Suspense fallback={<FullAppLoader />}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}

App.displayName = "App";

export default App;
