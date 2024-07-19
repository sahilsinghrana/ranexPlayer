import LinkButton from "../../components/Button/LinkButton";
import {lazyWithRetry} from "../../utils/reactLazy";

const HomeSection = lazyWithRetry(() => import("./HomeSection"));

function LoginAndUnlockTheSecrets() {
  return (
    <>
      <HomeSection className="w-full rounded-lg bg-teal-950/25 flex items-center justify-center flex-col py-8 h-[230px] sm:h-[300px] mb-3">
        <h1 className="text-xl mb-3 sm:text-3xl text-center uppercase font-light text-neutral-400 px-3 opacity-85">
          <b className="text-neutral-300">Unlock</b> the{" "}
          <b className="text-neutral-300">secrets</b> of the <br />
          <b className="font-bold text-neutral-200 tracking-widest">
            Intergalactic
          </b>
        </h1>
        <LinkButton
          to="/login"
          className={
            "mt-5 text-lg sm:w-[200px] w-[180px] bg-red-950 text-center py-5"
          }
        >
          Login
        </LinkButton>
      </HomeSection>
    </>
  );
}

export default LoginAndUnlockTheSecrets;
