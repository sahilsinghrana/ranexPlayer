import FullAppLoader from "./components/Loaders/FullAppLoader";
import supabase from "./config/supabase";
import {addAccessTokenToFetchHeader} from "./helpers/axiosInstance";
import fetcher from "./helpers/fetcher";
import player from "./lib/player";
import AppRoutes from "./router/AppRoutes";
import {sessionAtom} from "./store/atoms/authAtom";

import {useSetAtom} from "jotai";
import {Suspense, useEffect} from "react";
import {SWRConfig} from "swr";

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
      <SWRConfig
        value={{
          fetcher,
          dedupingInterval: 100000,
          revalidateOnFocus: false,
          revalidateIfStale: false,
          refreshWhenOffline: true,
        }}
      >
        <Suspense fallback={<FullAppLoader />}>
          <AppRoutes />
        </Suspense>
      </SWRConfig>
    </div>
  );
}

export default App;
