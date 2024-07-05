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
      // style={{
      //   height: "10vh",
      // }}
      className={
        "md:flex-row  flex-col dark:bg-subtleBackgroundDark bg-subtleBackground/80 py-3 border-borderHover/20 border-b-2 border-opacity-5 flex flex-wrap justify-center sm:justify-between pr-5 pl-1 items-center"
      }
    >
      <div className="flex flex-col flex-wrap items-center justify-center mt-0 md:flex-row">
        <Suspense fallback={<div>Loader...</div>}>
          <Link to="/">
            <Logo className={"h-[50px] sm:h-[80px] "} />
          </Link>
        </Suspense>
        <div>
          <h2 className="pl-3 text-lg font-light tracking-wide text-center uppercase md:text-3xl lg:text-4xl sm:text-left sm:pl-6 sm:text-2xl opacity-60">
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
          <Link to="/login">Login</Link>
        )}
      </div>
    </header>
  );
};

Header.displayName = "Header";

export default Header;
