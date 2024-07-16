import {memo} from "react";

function MessageSignup() {
  return (
    <h2 className="text-2xl font-light tracking-wide text-right uppercase sm:text-3xl opacity-80 text-slate-100 ">
      Join the <span className="font-bold">Force</span>
      <br />
      Hold the <span className="font-bold">Power</span>
      <br />
      Your`s is the <span className="font-bold">Moon</span>
      <br />
      Control your <span className="font-semibold">space,</span> Control your{" "}
      <span className="font-bold">Music</span>
      <br />
      Over your own <span className="font-bold">CLOUD</span>
    </h2>
  );
}

export default memo(MessageSignup);
