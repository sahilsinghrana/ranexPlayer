import themeAtom, {THEME_SELECTOR_OPTIONS} from '../store/atoms/themeAtom';

import {useAtom} from 'jotai';
import {useLayoutEffect} from 'react';

const removeEventListener = () => {
  window
    .matchMedia('(prefers-color-scheme: dark)')
    .removeEventListener('change', () => {});
};

const useSystemThemeListener = () => {
  const [theme, setTheme] = useAtom(themeAtom);
  useLayoutEffect(() => {
    if (theme.selection === THEME_SELECTOR_OPTIONS.user) {
      removeEventListener();
    } else {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', (event) => {
          const newColorScheme = event.matches ? 'dark' : 'light';
          setTheme({
            theme: newColorScheme,
            selection: THEME_SELECTOR_OPTIONS.system,
          });
        });
    }
    return () => {
      removeEventListener();
    };
  }, [setTheme, theme.selection]);

  return theme;
};

export default useSystemThemeListener;
