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
        ' dark:bg-subtleBackgroundDark bg-subtleBackground py-3 border-borderHover/20 border-b-2 border-opacity-5 flex justify-between pr-5 pl-1 items-center'
      }
    >
      <div>
        <button
          className="p-2 font-extrabold text-white rounded-lg bg-solidBackground/40 hover:bg-hoverSolidBackground dark:hover:bg-hoverSolidBackgroundDark"
          onClick={() => setSidebar((show) => !show)}
        >
          <HamburgerMenuIcon />
        </button>
      </div>
      <div>
        <h1 className="text-3xl text-center text-textPrimary dark:text-textPrimaryDark ">
          Ranex Player
        </h1>
      </div>
      <div>
        <button
          onClick={toggle}
          className="p-2 mx-4 rounded-full text-gray-2 dark:text-gray-12 dark:bg-elementBackground bg-elementBackgroundDark hover:scale-110 "
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
