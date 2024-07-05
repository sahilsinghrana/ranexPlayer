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
    <div className="flex flex-col h-full pb-10 overflow-auto scroll-auto">
      <div className="flex flex-col items-center justify-between m-4 mb-3 ml-2 sm:items-start md:flex-row">
        <LogoBig />
        <div className="mt-2 mb-1 md:mt-20">
          <MessageLogin />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center flex-grow h-full">
        <div className="flex flex-col items-center justify-center py-8 border-2 rounded-lg border-gray-11/50">
          <div className="mb-3">
            <h1 className="mb-4 text-3xl font-bold text-textSecondaryDark/80">
              LOG IN
            </h1>
          </div>
          <div className="mb-4 max-w-[400px] w-[300px] flex flex-col items-center justify-center">
            <SignInWithGoogleButton onClick={handleSignInWithGoogle} />
          </div>
          <form className="flex flex-col justify-center items-center max-w-[500px] w-[330px]">
            <Input
              placeholder="email"
              value={formData.email}
              name="email"
              onChange={handleChange}
              className={"m-2 max-w-[400px] min-w-[270px]"}
            />
            <Input
              name="password"
              placeholder="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className={"m-2  max-w-[400px] min-w-[270px]"}
            />
            <BaseButton className={" my-4 w-[200px]"}>Submit</BaseButton>
          </form>

          <div>
            Create an account ?{" "}
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
