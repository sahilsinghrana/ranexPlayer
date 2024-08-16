import BaseButton from "../../components/Button/Button";
import Input from "../../components/Form/Input";
import supabase from "../../config/supabase";

import {useState} from "react";

function SignupForm() {
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

    // TODO - validation
    const {email, password, firstName, lastName} = formData;
    if (email && password && firstName && lastName)
      supabase.auth
        .signUp({
          email: email,
          password: password,
          options: {
            redirectTo: window.location.origin,
            data: {
              first_name: firstName,
              last_name: lastName,
            },
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
        placeholder="First Name"
        value={formData.firstName}
        name="firstName"
        type="text"
        onChange={handleChange}
        className={"m-3 w-full"}
        autoComplete="name webauthn"
        pattern="[A-Za-z]{3,}"
        title="First name must be at least 3 letters long"
      />
      <Input
        required
        placeholder="Last Name"
        value={formData.lastName}
        name="lastName"
        type="text"
        onChange={handleChange}
        className={"m-3 w-full"}
        autoComplete="email webauthn"
        pattern="[A-Za-z]{3,}"
        title="First name must be at least 3 letters long"
      />
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

export default SignupForm;
