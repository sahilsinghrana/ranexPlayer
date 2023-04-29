import useTheme from '../../hooks/useTheme';

import {MoonIcon, SunIcon} from '@radix-ui/react-icons';

const Header = () => {
  const [theme, toggle] = useTheme();
  return (
    <header className="top-0 dark:bg-backgroundDarker bg-slate-400 py-3 border-b-backgroundDarker border-b-2 border-opacity-10 flex justify-between px-5 items-center">
      <div></div>
      <div>
        <h1 className="text-center text-3xl ">Ranex Player</h1>
      </div>
      <div>
        <button
          onClick={toggle}
          className="rounded-full mx-4 dark:bg-slate-700 bg-slate-200 p-2 hover:scale-110 "
        >
          {theme === 'light' ? <SunIcon /> : <MoonIcon />}
        </button>
        <button>Login</button>
      </div>
    </header>
  );
};

Header.displayName = 'Header';

export default Header;
