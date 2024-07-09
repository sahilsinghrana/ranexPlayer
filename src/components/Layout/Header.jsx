import supabase from "../../config/supabase";
import useTheme from "../../hooks/useTheme";
import {sessionAtom} from "../../store/atoms/authAtom";

import {MoonIcon, SunIcon} from "@radix-ui/react-icons";
import {useAtom} from "jotai";
import {Suspense, useEffect, useRef, useState} from "react";
import {lazy} from "react";
import {Link} from "react-router-dom";

const Logo = lazy(() => import("../Branding/Logo"));

const Header = () => {
  const [theme, toggle] = useTheme();

  const [session, setSession] = useAtom(sessionAtom);

  return (
    <header
      className={
        "md:flex-row  flex-col bg-grayDark-1 py-3 border-borderHover/20 border-b-2 border-opacity-5 flex flex-wrap justify-center sm:justify-between pr-5 pl-1 items-center"
      }
    >
      <div className="flex flex-col flex-wrap items-center justify-center mt-0 md:flex-row">
        <Suspense fallback={<div>Loader...</div>}>
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
        <button
          onClick={toggle}
          className="p-2 mx-4 bg-black rounded-full text-gray-2 dark:text-gray-12 dark:bg-white hover:scale-110 "
        >
          {theme === "light" ? <SunIcon /> : <MoonIcon />}
        </button>
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
          <>
            <Link to="/login" className="text-white">
              Login
            </Link>
            <ProfileDropdown />
          </>
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
    <div ref={ddRef} className="relative mx-2 m-0 p-0">
      <button onClick={() => setOpen((t) => !t)}>
        <img
          src=""
          className="h-[25px] w-[25px] rounded-full bg-white  "
          alt="profile"
        />
      </button>
      {open && (
        <ul className="w-[160px] py-2 flex flex-col text-sm border border-neutral-400/30  bg-neutral-900/70 rounded-lg absolute z-10 top-[80%] left-0">
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
