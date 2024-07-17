import musicalSkull from "../../assets/images/musicalSkull.webp";
import supabase from "../../config/supabase";
import {sessionAtom} from "../../store/atoms/authAtom";
import {lazyWithRetry} from "../../utils/reactLazy";
import MoonLoader from "../Loaders/MoonLoader";

import {useAtom} from "jotai";
import {Suspense, useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";

const Logo = lazyWithRetry(() => import("../Branding/Logo"));

const Header = () => {
  return (
    <header
      className={
        "bg-neutral-950 py-1 border-neutral-800/20 border-b-2 border-opacity-5 flex flex-wrap justify-between pr-5 pl-1 items-center backgroundStars"
      }
    >
      <Suspense fallback={<MoonLoader />}>
        <Logo className={"h-[60px] sm:h-[80px] md:h-[90px] "} />
      </Suspense>
      <div className="flex items-center justify-center mt-2 sm:mt-0 ">
        <div className="flex items-center h-full">
          <ProfileDropdown />
        </div>
      </div>
    </header>
  );
};

export default Header;

let outerClick;
function ProfileDropdown() {
  const [open, setOpen] = useState(false);
  const ddRef = useRef();
  const [session, setSession] = useAtom(sessionAtom);

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
          className="h-[35px] w-[35px] object-cover rounded-full bg-neutral-400 hue-rotate-30"
          alt="profile"
        />
      </button>
      {open && (
        <ul className="w-[160px] py-2 flex flex-col text-sm border border-neutral-400/30 mt-2  bg-neutral-900/70 rounded-lg absolute z-10 top-full left-auto right-[-150%] md:right-0">
          <DropDownLink onClick={() => setOpen(false)} to={"/profile"}>
            Profile
          </DropDownLink>
          <DropDownLink onClick={() => setOpen(false)} to={"/settings"}>
            Settings
          </DropDownLink>
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
            <DropDownLink to="/login" className="text-white">
              Login
            </DropDownLink>
          )}
        </ul>
      )}
    </div>
  );
}

function DropDownLink({to, children, onClick}) {
  return (
    <li className="mb-1 w-[160px]">
      <Link
        onClick={onClick}
        to={to}
        className="h-[30px] transition duration-75 flex items-center w-full hover:bg-neutral-600/90 py-3 px-2 text-white  text-center"
      >
        {children}
      </Link>
    </li>
  );
}
