import themeAtom, {THEME_SELECTOR_OPTIONS} from '../store/atoms/themeAtom';

import {useAtom} from 'jotai';

const useTheme = () => {
  const [theme, setTheme] = useAtom(themeAtom);
  const toggle = () => {
    setTheme((current) => {
      if (current.theme === 'dark') {
        return {
          theme: 'light',
          selection: THEME_SELECTOR_OPTIONS.user,
        };
      } else {
        return {
          theme: 'dark',
          selection: THEME_SELECTOR_OPTIONS.user,
        };
      }
    });
  };
  return [theme.theme, toggle];
};

export default useTheme;
