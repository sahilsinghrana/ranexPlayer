import musicalSkull from "../../assets/images/musicalSkull.webp";
import supabase from "../../config/supabase";
import {sessionAtom} from "../../store/atoms/authAtom";
import {lazyWithRetry} from "../../utils/ReactLazy";
import MoonLoader from "../Loaders/MoonLoader";

import {useAtom} from "jotai";
import {Suspense, useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";

const Logo = lazyWithRetry(() => import("../Branding/Logo"));

const Header = () => {
  const [session, setSession] = useAtom(sessionAtom);

  return (
    <header
      className={
        "md:flex-row  flex-col bg-neutral-950 py-2 pt-1 border-neutral-800/20 border-b-2 border-opacity-5 flex flex-wrap justify-center sm:justify-between pr-5 pl-1 items-center"
      }
    >
      <div className="flex flex-col flex-wrap items-center justify-center mt-0 md:flex-row">
        <Suspense fallback={<MoonLoader />}>
          <Link to="/">
            <Logo className={"h-[50px] sm:h-[60px] md:h-[70px] "} />
          </Link>
        </Suspense>
        <div>
          <h2 className="py-1 pl-3 text-xs font-light tracking-wide text-center text-white uppercase md:text-xl lg:text-2xl sm:text-left sm:pl-6 sm:text-sm opacity-60">
            Get <span className="font-normal">Dwelved</span> in the soul of the{" "}
            <span className="font-bold">Sound</span>
            <br />
          </h2>
        </div>
      </div>
      <div className="flex items-center justify-center mt-4 sm:mt-0 ">
        {session ? (
          <button
            onClick={() => {
              supabase.auth
                .signOut()
                .then(() => {
                  setSession();
                })
                .catch(() => {
                  localStorage.clear();
                  sessionStorage.clear();
                  window.location.reload();
                });
            }}
          >
            Logout
          </button>
        ) : (
          <div className="flex items-center h-full">
            <Link to="/login" className="text-white">
              Login
            </Link>
            <ProfileDropdown />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

let outerClick;
function ProfileDropdown() {
  const [open, setOpen] = useState(false);
  const ddRef = useRef();

  useEffect(() => {
    outerClick = function () {
      document.addEventListener("mousedown", (e) => {
        if (ddRef.current && !ddRef.current.contains(e.target)) setOpen(false);
      });
    };
    outerClick();
    return () => document.removeEventListener("mousedown", outerClick);
  }, [ddRef]);

  return (
    <div
      ref={ddRef}
      className="relative p-0 m-0 mx-2 w-[35px] flex items-center h-full"
    >
      <button onClick={() => setOpen((t) => !t)}>
        <img
          src={musicalSkull}
          className="h-[35px] w-[35px] object-cover rounded-full bg-neutral-400 hue-rotate-30  "
          alt="profile"
        />
      </button>
      {open && (
        <ul className="w-[160px] py-2 flex flex-col text-sm border border-neutral-400/30  bg-neutral-900/70 rounded-lg absolute z-10 top-full left-auto md:right-0">
          <DropDownLink to={"/profile"}>Profile</DropDownLink>
          <DropDownLink to={"/settings"}>Settings</DropDownLink>
        </ul>
      )}
    </div>
  );
}

function DropDownLink({to, children}) {
  return (
    <li className="mb-1 w-[160px]">
      <Link
        to={to}
        className="h-[30px] transition duration-75 flex items-center w-full hover:bg-neutral-600/90 py-3 px-2 text-white  text-center"
      >
        {children}
      </Link>
    </li>
  );
}
