import supabase from "../../config/supabase";
import useTheme from "../../hooks/useTheme";
import {sessionAtom} from "../../store/atoms/authAtom";

import {MoonIcon, SunIcon} from "@radix-ui/react-icons";
import {useAtom} from "jotai";
import {Suspense} from "react";
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
            <Logo className={"h-[50px] sm:h-[80px] "} />
          </Link>
        </Suspense>
        <div>
          <h2 className="py-1 pl-3 text-sm font-light tracking-wide text-center text-white uppercase md:text-2xl lg:text-3xl sm:text-left sm:pl-6 sm:text-xl opacity-60">
            Get <span className="font-normal">Dwelved</span> in the soul of{" "}
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
          <Link to="/login" className="text-white">
            Login
          </Link>
        )}
      </div>
    </header>
  );
};

Header.displayName = "Header";

export default Header;
