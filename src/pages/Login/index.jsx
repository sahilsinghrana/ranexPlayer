import LoginForm from "./LoginForm";

import LogoBig from "../../components/Branding/LogoBig";
import SignInWithGoogleButton from "../../components/Button/SignInWithProvider/SignInWithGoogle";
import MessageLogin from "../../components/MessageWalls/MessageLogin";
import supabase from "../../config/supabase";
import useIsUserLoggedIn from "../../hooks/useIsUserLoggedIn";

import {Link, Navigate} from "react-router-dom";

function LoginPage() {
  const isUserLoggedIn = useIsUserLoggedIn();

  if (isUserLoggedIn) return <Navigate to={"/"} />;

  function handleSignInWithGoogle() {
    supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: window.location.origin,
      },
    });
  }

  return (
    <div className="flex flex-col h-[100dvh] pb-10 overflow-auto backgroundStars scroll-auto bg-grayDark-1 ">
      <div className="flex flex-col items-center justify-between m-4 mb-3 ml-2 sm:items-start md:flex-row">
        <LogoBig />
        <div className="self-end mt-5 sm:mb-1 md:mt-16">
          <MessageLogin />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center flex-grow h-full ">
        <div className="flex flex-col items-center justify-center py-8 pt-4 border-2 rounded-lg border-red-600/20 max-w-[460px] min-w-[320px] w-[80%]">
          <div className="mb-3">
            <h1 className="mb-4 text-3xl font-bold text-orange-600/80">
              Log In
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center mb-4">
            <SignInWithGoogleButton onClick={handleSignInWithGoogle} />
          </div>
          <LoginForm />
          <div className="text-white">
            New to the space ?{" "}
            <Link to={"/signup"} className="text-red-500">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
