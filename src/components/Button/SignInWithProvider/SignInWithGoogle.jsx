import SignInWithProviderBaseButton from "./SignInWithProviderBaseButton";

function SignInWithGoogleButton({onClick}) {
  return (
    <SignInWithProviderBaseButton onClick={onClick}>
      SignIn With Google
    </SignInWithProviderBaseButton>
  );
}

export default SignInWithGoogleButton;
