import BaseButton from "../Button";

function SignInWithProviderBaseButton({children, onClick}) {
  return (
    <BaseButton type="secondary" onClick={onClick}>
      {children}
    </BaseButton>
  );
}

export default SignInWithProviderBaseButton;
