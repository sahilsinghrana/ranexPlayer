import BaseButton from "../Button";

import clsx from "clsx";

function SignInWithProviderBaseButton({children, onClick, className}) {
  return (
    <BaseButton
      type="primary"
      onClick={onClick}
      className={clsx(
        "p-6 px-7 bg-neutral-200 text-neutral-800 hover:text-neutral-950 hover:bg-neutral-300 ",
        className
      )}
    >
      {children}
    </BaseButton>
  );
}

export default SignInWithProviderBaseButton;
