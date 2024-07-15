import {useCallback} from "react";
import {useSearchParams} from "react-router-dom";

const PLAYER_VIEW_KEY = "playerView";

function checkIsFullVIew(searchParam) {
  return searchParam.has(PLAYER_VIEW_KEY);
}

function usePlayerFullView() {
  const [searchParams, setSearhParams] = useSearchParams();

  const isFullView = checkIsFullVIew(searchParams);

  const toggle = useCallback(() => {
    setSearhParams((prev) => {
      if (isFullView) {
        prev.delete(PLAYER_VIEW_KEY);
      } else {
        prev.append(PLAYER_VIEW_KEY, "full");
      }
      return prev;
    });
  }, [isFullView, setSearhParams]);

  return [isFullView, toggle];
}

export default usePlayerFullView;
