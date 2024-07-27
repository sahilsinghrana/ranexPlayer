import FullAppLoader from "./components/Loaders/FullAppLoader";
import supabase from "./config/supabase";
import {addAccessTokenToFetchHeader} from "./helpers/axiosInstance";
import fetcher from "./helpers/fetcher";
// import player from "./lib/player";
import AppRoutes from "./router/AppRoutes";
import {sessionAtom} from "./store/atoms/authAtom";

import {useSetAtom} from "jotai";
import {Suspense, useEffect} from "react";
import {SWRConfig} from "swr";

const swrOptions = {
  fetcher,
  dedupingInterval: 100000,
  revalidateOnFocus: false,
  revalidateIfStale: false,
  refreshWhenOffline: true,
  errorRetryCount: 30,
  loadingTimeout: 4000,
  revalidateOnReconnect: true,
  shouldRetryOnError: true,
  errorRetryInterval: 1000,
};

function App() {
  const setSession = useSetAtom(sessionAtom);

  useEffect(() => {
    const {
      data: {subscription},
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        addAccessTokenToFetchHeader(session?.access_token);
        setSession(session);
        return;
      }
      setSession();
    });

    return () => subscription.unsubscribe();
  }, [setSession]);

  return (
    <div className=" bg-neutral-800 text-neutral-100 backgroundStars">
      <SWRConfig value={swrOptions}>
        <Suspense fallback={<FullAppLoader />}>
          <AppRoutes />
        </Suspense>
      </SWRConfig>
    </div>
  );
}

export default App;
