import BaseButton from "../Button";

import clsx from "clsx";

function SignInWithProviderBaseButton({children, onClick, className}) {
  return (
    <BaseButton
      type="primary"
      onClick={onClick}
      className={clsx(
        "p-6 px-7 bg-white text-black hover:bg-white ",
        className
      )}
    >
      {children}
    </BaseButton>
  );
}

export default SignInWithProviderBaseButton;
