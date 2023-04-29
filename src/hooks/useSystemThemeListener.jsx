import {THEME_SELECTOR_OPTIONS, updateThemeClassInDom} from '../lib/theme';
import themeAtom from '../store/atoms/themeAtom';

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
      updateThemeClassInDom(theme.theme);
    } else {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', (event) => {
          const newColorScheme = event.matches ? 'dark' : 'light';
          setTheme({
            theme: newColorScheme,
            selection: THEME_SELECTOR_OPTIONS.system,
          });
          updateThemeClassInDom(newColorScheme);
        });
    }
    return () => {
      removeEventListener();
    };
  }, [setTheme, theme.selection, theme.theme]);

  return theme;
};

export default useSystemThemeListener;
