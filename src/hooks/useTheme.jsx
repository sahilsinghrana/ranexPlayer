import {THEME_SELECTOR_OPTIONS, updateThemeClassInDom} from '../lib/theme';
import themeAtom from '../store/atoms/themeAtom';

import {useAtom} from 'jotai';

const useTheme = () => {
  const [theme, setTheme] = useAtom(themeAtom);
  const toggle = () => {
    setTheme((current) => {
      const newTheme = current.theme === 'dark' ? 'light' : 'dark';
      updateThemeClassInDom(newTheme);
      return {
        theme: newTheme,
        selection: THEME_SELECTOR_OPTIONS.user,
      };
    });
  };
  return [theme.theme, toggle];
};

export default useTheme;
