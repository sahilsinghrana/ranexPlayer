import useSWR from "swr";

function useUserProfile() {
  const {data, isLoading, error} = useSWR("/user/profile");
  return {
    user: data?.data,
    isLoading,
    error,
  };
}

export default useUserProfile;
