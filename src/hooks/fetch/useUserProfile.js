import useIsUserLoggedIn from "../useIsUserLoggedIn";

import useSWR from "swr";

function useUserProfile() {
  const isLoggedIn = useIsUserLoggedIn();
  const {data, isLoading, error} = useSWR(isLoggedIn ? "/user/profile" : null);
  return {
    user: data?.data || {},
    isLoading,
    error,
  };
}

export default useUserProfile;
