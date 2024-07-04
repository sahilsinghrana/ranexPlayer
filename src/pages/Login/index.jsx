import supabase from "../../config/supabase";
import {sessionAtom} from "../../store/atoms/authAtom";

import {Auth} from "@supabase/auth-ui-react";
import {ThemeMinimal} from "@supabase/auth-ui-shared";
import {useAtomValue} from "jotai";
import {Navigate} from "react-router-dom";

export default function App() {
  const session = useAtomValue(sessionAtom);

  if (!session) {
    return (
      <>
        <Auth supabaseClient={supabase} appearance={{theme: ThemeMinimal}} />
      </>
    );
  } else {
    return <Navigate to={"/"} />;
  }
}
