import LogoBig from "../../components/Branding/LogoBig";
import BaseButton from "../../components/Button/Button";
import SignInWithGoogleButton from "../../components/Button/SignInWithProvider/SignInWithGoogle";
import Input from "../../components/Form/Input";
import MessageLogin from "../../components/MessageWalls/MessageLogin";
import supabase from "../../config/supabase";

import {useState} from "react";
import {Link} from "react-router-dom";

const serverUrl = import.meta.env.VITE_SERVER_URL;

function LoginPage() {
  const [formData, setFormData] = useState({});
  function handleChange(e) {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormData((prev) => ({
      ...prev,
      [inputName]: inputValue,
    }));
  }

  function handleSignInWithGoogle() {
    supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: serverUrl + `/auth/callback`,
      },
    });
  }

  return (
    <div className="flex flex-col h-full pb-10 overflow-auto scroll-auto bg-grayDark-1 ">
      <div className="flex flex-col items-center justify-between m-4 mb-3 ml-2 sm:items-start md:flex-row">
        <LogoBig />
        <div className="self-end mt-5 sm:mb-1 md:mt-16">
          <MessageLogin />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center flex-grow h-full ">
        <div className="flex flex-col items-center justify-center py-8 border-2 rounded-lg border-gray-11/20 max-w-[460px] min-w-[320px] w-[80%]">
          <div className="mb-3">
            <h1 className="mb-4 text-3xl font-bold text-textSecondaryDark/80">
              Log In
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center mb-4">
            <SignInWithGoogleButton onClick={handleSignInWithGoogle} />
          </div>
          <form className="flex flex-col justify-center items-center max-w-[320px] w-[80%]  min-w-[280px]">
            <Input
              required
              placeholder="Email"
              value={formData.email}
              name="email"
              type="email"
              onChange={handleChange}
              className={"m-3 w-full"}
              pattern="[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}"
            />
            <Input
              required
              name="Password"
              placeholder="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className={"m-3  w-full"}
              minLength={6}
            />
            <BaseButton className={" my-4 w-[200px]"}>Submit</BaseButton>
          </form>

          <div className="text-white">
            New to the space ?{" "}
            <Link to={"/signup"} className="text-secondary-7">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
