import FETCH_KEYS from "../../utils/constants/fetchKeys";
import useIsUserLoggedIn from "../useIsUserLoggedIn";

import useSWR from "swr";

function useUserProfile() {
  const isLoggedIn = useIsUserLoggedIn();
  const {data, isLoading, error} = useSWR(
    isLoggedIn ? FETCH_KEYS.userProfile : null
  );
  return {
    user: data?.data || {},
    isLoading,
    error,
  };
}

export default useUserProfile;
