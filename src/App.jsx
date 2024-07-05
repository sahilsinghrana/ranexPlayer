import FullAppLoader from "./components/Loaders/FullAppLoader";
import supabase from "./config/supabase";
import fetcher from "./helpers/fetcher";
import useSystemThemeListener from "./hooks/useSystemThemeListener";
import router from "./router";
import {sessionAtom} from "./store/atoms/authAtom";

import {useSetAtom} from "jotai";
import {Suspense, useEffect} from "react";
import {RouterProvider} from "react-router-dom";

function App() {
  useSystemThemeListener();
  const setSession = useSetAtom(sessionAtom);

  useEffect(() => {
    supabase.auth.getSession().then(({data: {session}}) => {
      setSession(session);
      fetcher.defaults.headers[
        "X-Auth-Token"
      ] = `Bearer ${session.access_token}`;
    });
    const {
      data: {subscription},
    } = supabase.auth.onAuthStateChange((_event, session) => {
      fetcher.defaults.headers[
        "X-Auth-Token"
      ] = `Bearer ${session.access_token}`;
      console.log("Session updating", session);
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, [setSession]);

  return (
    <div className="w-screen h-screen bg-appBackground dark:bg-appBackgroundDark text-textLight dark:text-textDark " >
      <Suspense fallback={<FullAppLoader />}>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
}

App.displayName = "App";

export default App;
