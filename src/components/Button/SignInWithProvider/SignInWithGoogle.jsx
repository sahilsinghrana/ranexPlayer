import SignInWithProviderBaseButton from "./SignInWithProviderBaseButton";

function SignInWithGoogleButton({onClick}) {
  return (
    <SignInWithProviderBaseButton onClick={onClick}>
      <img
        src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
        height={20}
        width={20}
        className="mr-2"
        alt="google logo"
      />
      SignIn With Google
    </SignInWithProviderBaseButton>
  );
}

export default SignInWithGoogleButton;
