import {sessionAtom} from "../store/atoms/authAtom";

import {useAtomValue} from "jotai";

function useIsUserLoggedIn() {
  const session = useAtomValue(sessionAtom);
  return !!session;
}

export default useIsUserLoggedIn;
