import useTheme from '../../hooks/useTheme';
import sidebarAtom from '../../store/atoms/layout/sidebar';

import {MoonIcon, SunIcon, HamburgerMenuIcon} from '@radix-ui/react-icons';
import {useSetAtom} from 'jotai';

const Header = () => {
  const [theme, toggle] = useTheme();
  const setSidebar = useSetAtom(sidebarAtom);

  return (
    <header
      style={{
        height: '10vh',
      }}
      className={
        ' dark:bg-subtleBackgroundDark bg-subtleBackground py-3 border-b-backgroundDarker border-b-2 border-opacity-10 flex justify-between px-5 items-center'
      }
    >
      <div>
        <button onClick={() => setSidebar((show) => !show)}>
          <HamburgerMenuIcon />
        </button>
      </div>
      <div>
        <h1 className="text-3xl text-center ">Ranex Player</h1>
      </div>
      <div>
        <button
          onClick={toggle}
          className="p-2 mx-4 rounded-full dark:bg-elementBackgroundDark bg-elementBackground hover:scale-110 "
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
