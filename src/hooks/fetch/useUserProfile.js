import fetcher from "../../helpers/fetcher";

import useSWR from "swr";

function useUserProfile() {
  const {data, isLoading, error} = useSWR("/user/profile", fetcher);

  return {
    user: data?.data?.data,
    isLoading,
    error,
  };
}

export default useUserProfile;
