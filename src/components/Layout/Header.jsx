import supabase from "../../config/supabase";
import fetcher from "../../helpers/fetcher";
import useUserProfilePic from "../../hooks/fetch/useUserProfilePic";
import {sessionAtom} from "../../store/atoms/authAtom";
import Logo from "../Branding/Logo";

import {useAtom} from "jotai";
import {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <header
      className={
        "bg-black py-1  flex flex-wrap shadow-sm shadow-slate-300/50 justify-between pr-5 pl-1 items-center backgroundStars"
      }
    >
      <div className="flex items-center">
        <Logo className={"h-[60px] sm:h-[80px] md:h-[90px] "} />
        <p className="px-1 mt-2 text-xs bg-red-600">Work In Progress!</p>
      </div>
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
      <ProfileButton setOpen={setOpen} />
      {open && <DropDownLinks setOpen={setOpen} />}
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

function ProfileButton({setOpen}) {
  const profileSrc = useUserProfilePic();
  return (
    <button onClick={() => setOpen((t) => !t)}>
      <img
        src={profileSrc}
        className="h-[35px] w-[35px] object-cover rounded-full bg-neutral-400 hue-rotate-30 outline outline-red-600/60 hover:outline-red-500/70"
        alt="profile"
      />
    </button>
  );
}

function DropDownLinks({setOpen}) {
  const [session, setSession] = useAtom(sessionAtom);

  return (
    <ul className="w-[160px] py-2 flex flex-col text-sm border border-neutral-400/30 mt-2  bg-neutral-900/70 rounded-lg absolute z-10 top-full left-auto right-[-150%] md:right-0">
      {session && (
        <>
          <DropDownLink onClick={() => setOpen(false)} to={"/profile"}>
            Profile
          </DropDownLink>
          <DropDownLink onClick={() => setOpen(false)} to={"/settings"}>
            Settings
          </DropDownLink>
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
              fetcher("/logout");
            }}
          >
            Logout
          </button>
        </>
      )}
      {!session && (
        <>
          <DropDownLink to="/login" className="text-white">
            Login
          </DropDownLink>
          <DropDownLink to="/about" className="text-white">
            About
          </DropDownLink>
        </>
      )}
    </ul>
  );
}
