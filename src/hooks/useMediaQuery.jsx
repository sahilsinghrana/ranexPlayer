import {useState, useEffect} from "react";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(() => {
    return window.matchMedia(query);
  });

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;

export function useIsDesktop() {
  return useMediaQuery("(min-width: 960px)");
}

export function useIsMobile() {
  return useMediaQuery("(max-width: 500px)");
}
