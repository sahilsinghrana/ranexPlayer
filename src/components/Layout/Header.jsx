import supabase from "../../config/supabase";
import useTheme from "../../hooks/useTheme";
import {sessionAtom} from "../../store/atoms/authAtom";
import sidebarAtom from "../../store/atoms/layout/sidebar";

import {MoonIcon, SunIcon, HamburgerMenuIcon} from "@radix-ui/react-icons";
import {useAtom, useSetAtom} from "jotai";
import {Suspense} from "react";
import {lazy} from "react";
import {Link} from "react-router-dom";

const Logo = lazy(() => import("../Branding/Logo"));

const Header = () => {
  const [theme, toggle] = useTheme();
  const setSidebar = useSetAtom(sidebarAtom);

  const [session, setSession] = useAtom(sessionAtom);

  return (
    <header
      style={{
        height: "10vh",
      }}
      className={
        " dark:bg-subtleBackgroundDark bg-subtleBackground py-3 border-borderHover/20 border-b-2 border-opacity-5 flex justify-between pr-5 pl-1 items-center"
      }
    >
      <div>
        <button
          className="p-2 font-extrabold text-white rounded-lg bg-solidBackground dark:bg-solidBackgroundDark hover:bg-hoverSolidBackground/80 dark:hover:bg-hoverSolidBackgroundDark/80"
          onClick={() => setSidebar((show) => !show)}
        >
          <HamburgerMenuIcon />
        </button>
      </div>
      <div>
        <Suspense fallback={<div>Loader...</div>}>
          <Link to="/">
            <Logo />
          </Link>
        </Suspense>
      </div>
      <div>
        <button
          onClick={toggle}
          className="p-2 mx-4 rounded-full text-gray-2 dark:text-gray-12 dark:bg-solidBackgroundDark bg-solidBackground hover:scale-110 "
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
