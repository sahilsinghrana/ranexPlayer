import {memo} from "react";

function MessageLogin() {
  return (
    <h2 className="text-2xl font-light tracking-wide text-right uppercase sm:text-3xl opacity-80 text-slate-100 ">
      Let us get <span className="font-bold">Lost</span>
      <br />
      Across the <span className="font-bold">Universe</span>
      <br />
      Let us <span className="font-bold">vacillate</span>
      <br />
      With the <span className="font-semibold">moon</span> within the{" "}
      <span className="font-bold">Trance</span>
      <br />
      Over our own <span className="font-bold">CLOUD</span>
    </h2>
  );
}

export default memo(MessageLogin);
