import BaseButton from "../../components/Button/Button";
import Input from "../../components/Form/Input";
import supabase from "../../config/supabase";

import {useState} from "react";

function LoginForm() {
  const [formData, setFormData] = useState({});

  function handleChange(e) {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormData((prev) => ({
      ...prev,
      [inputName]: inputValue,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    const {email, password} = formData;

    // TODO - validation
    if (email && password)
      supabase.auth
        .signInWithPassword({
          email: email,
          password: password,
          options: {
            redirectTo: window.location.origin,
          },
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center max-w-[320px] w-[80%]  min-w-[280px]"
    >
      <Input
        required
        placeholder="Email"
        value={formData.email}
        name="email"
        type="email"
        onChange={handleChange}
        className={"m-3 w-full"}
        pattern="[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}"
        autoComplete="email webauthn"
        title="Enter a valid email."
      />
      <Input
        autoComplete="current-password webauthn"
        required
        name="password"
        placeholder="Password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        className={"m-3  w-full"}
        minLength={6}
        title="Password must be of atleast 6 digits"
      />
      <BaseButton className={" my-4 w-[200px]"}>Submit</BaseButton>
    </form>
  );
}

export default LoginForm;
