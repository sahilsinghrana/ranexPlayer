import fetcher from "../../helpers/fetcher";

import useSWRImmutable from "swr/immutable";

function useUserProfile() {
  const {data, isLoading, error} = useSWRImmutable("/user/profile", fetcher);

  return {
    user: data?.data?.data,
    isLoading,
    error,
  };
}

export default useUserProfile;
