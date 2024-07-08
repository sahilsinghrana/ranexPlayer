import song from "./assets/music/yrym.mp3";
import FullAppLoader from "./components/Loaders/FullAppLoader";
import supabase from "./config/supabase";
import {addAccessTokenToFetchHeader} from "./helpers/fetcher";
import useSystemThemeListener from "./hooks/useSystemThemeListener";
import player from "./lib/player";
import router from "./router";
import {sessionAtom} from "./store/atoms/authAtom";

import {useSetAtom} from "jotai";
import {Suspense, useEffect} from "react";
import {RouterProvider} from "react-router-dom";

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
    <div className="w-screen h-screen bg-neutral-500 dark:bg-neutral-800 text-textLight dark:text-textDark ">
      <Suspense fallback={<FullAppLoader />}>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
}

App.displayName = "App";

export default App;
