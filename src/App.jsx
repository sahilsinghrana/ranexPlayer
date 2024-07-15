import FullAppLoader from "./components/Loaders/FullAppLoader";
import supabase from "./config/supabase";
import {addAccessTokenToFetchHeader} from "./helpers/fetcher";
import player from "./lib/player";
import AppRoutes from "./router/AppRoutes";
import {sessionAtom} from "./store/atoms/authAtom";

import {useSetAtom} from "jotai";
import {Suspense, useEffect} from "react";

function App() {
  const setSession = useSetAtom(sessionAtom);

  useEffect(() => {
    import("./assets/music/yrym.mp3")
      .then((song) => {
        player.load(song.default);
      })
      .catch((err) => {
        console.log("Failed to load song", err);
      });
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
    <div className=" bg-neutral-800 text-neutral-100 backgroundStars">
      <Suspense fallback={<FullAppLoader />}>
        <AppRoutes />
      </Suspense>
    </div>
  );
}

App.displayName = "App";

export default App;
