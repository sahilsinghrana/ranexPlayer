import LogoBig from "../../components/Branding/LogoBig";
import BaseButton from "../../components/Button/Button";
import SignInWithGoogleButton from "../../components/Button/SignInWithProvider/SignInWithGoogle";
import Input from "../../components/Form/Input";
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
    <div className="flex flex-col h-full">
      <div className="p-4 flex m-4 mb-2">
        <LogoBig />
      </div>

      <div className="px-4 mx-4">
        <h2 className="text-4xl opacity-80 uppercase font-light  tracking-wide text-right">
          Let us get <span className="font-semibold">Lost</span>
          <br />
          Across the <span className="font-semibold">Universe</span>
          <br />
          Let us <span className="font-semibold">vacillate</span>
          <br />
          With the moon within the <span className="font-bold">Trance</span>
          <br />
          Over our own <span className="font-semibold">CLOUD</span>
        </h2>
      </div>

      <div className="flex flex-col flex-grow h-full justify-center items-center">
        <div className="border-gray-11 rounded-lg border-2 flex flex-col justify-center items-center py-8">
          <div className="mb-3">
            <h1 className="text-4xl font-extrabold text-gray-6 mb-4">LOG IN</h1>
          </div>
          <div className="mb-4 w-[400px] flex flex-col items-center justify-center">
            <SignInWithGoogleButton onClick={handleSignInWithGoogle} />
          </div>
          <form className="flex flex-col justify-center items-center w-[500px] ">
            <Input
              placeholder="email"
              value={formData.email}
              name="email"
              onChange={handleChange}
              className={"m-2 w-[400px]"}
            />
            <Input
              name="password"
              placeholder="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className={"m-2  w-[400px]"}
            />
            <BaseButton className={" my-4 w-[200px]"}>Submit</BaseButton>
          </form>

          <div>
            Create an account ?{" "}
            <Link to={"/signup"} className="text-primary-8">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
