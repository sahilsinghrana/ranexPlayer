import {THEME_SELECTOR_OPTIONS, updateThemeClassInDom} from '../lib/theme';
import themeAtom from '../store/atoms/themeAtom';

import {useAtom} from 'jotai';
import {useCallback} from 'react';
import {useLayoutEffect} from 'react';

const removeEventListener = (func) => {
  window
    .matchMedia('(prefers-color-scheme: dark)')
    .removeEventListener('change', func);
};

const useSystemThemeListener = () => {
  const [theme, setTheme] = useAtom(themeAtom);

  const handleThemeChange = useCallback(
    (event) => {
      const newColorScheme = event.matches ? 'dark' : 'light';
      setTheme({
        theme: newColorScheme,
        selection: THEME_SELECTOR_OPTIONS.system,
      });
      updateThemeClassInDom(newColorScheme);
    },
    [setTheme]
  );

  useLayoutEffect(() => {
    if (theme.selection === THEME_SELECTOR_OPTIONS.user) {
      removeEventListener();
      updateThemeClassInDom(theme.theme);
    } else {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', handleThemeChange);
    }
    return () => {
      removeEventListener(handleThemeChange);
    };
  }, [setTheme, theme.selection, theme.theme, handleThemeChange]);

  return theme;
};

export default useSystemThemeListener;
