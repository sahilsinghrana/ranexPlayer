import useSWR from "swr";

function useSWRSuspense(key) {
  return useSWR(key, {
    suspense: true,
  });
}

export default useSWRSuspense;
