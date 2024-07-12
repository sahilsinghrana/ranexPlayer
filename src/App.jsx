import song from "./assets/music/yrym.mp3";
import FullAppLoader from "./components/Loaders/FullAppLoader";
import supabase from "./config/supabase";
import {addAccessTokenToFetchHeader} from "./helpers/fetcher";
import useSystemThemeListener from "./hooks/useSystemThemeListener";
import player from "./lib/player";
import AppRoutes from "./router/AppRoutes";
import {sessionAtom} from "./store/atoms/authAtom";

import {useSetAtom} from "jotai";
import {Suspense, useEffect} from "react";
import {BrowserRouter} from "react-router-dom";

function App() {
  useSystemThemeListener();
  const setSession = useSetAtom(sessionAtom);

  useEffect(() => {
    player.load(song);
  }, []);

  useEffect(() => {
    supabase.auth.getSession().then(({data: {session}}) => {
      setSession(session);
      addAccessTokenToFetchHeader(session?.access_token);
    });
    const {
      data: {subscription},
    } = supabase.auth.onAuthStateChange((_event, session) => {
      addAccessTokenToFetchHeader(session?.access_token);

      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, [setSession]);

  return (
    <div className=" bg-neutral-800 text-neutral-100">
      <Suspense fallback={<FullAppLoader />}>
        {/* <RouterProvider router={router} /> */}
        <BrowserRouter basename={import.meta.env.VITE_BASE_URL}>
          <AppRoutes />
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

App.displayName = "App";

export default App;
