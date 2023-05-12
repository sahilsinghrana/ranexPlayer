import {THEME_SELECTOR_OPTIONS, updateThemeClassInDom} from '../lib/theme';
import themeAtom from '../store/atoms/themeAtom';

import {useAtom} from 'jotai';
import {useCallback, useLayoutEffect} from 'react';

const removeThemeChangeListener = (listener) => {
  window
    .matchMedia('(prefers-color-scheme: dark)')
    .removeEventListener('change', listener);
};

const addThemeChangeListener = (listener) => {
  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', listener);
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
    const listener = handleThemeChange;

    if (theme.selection === THEME_SELECTOR_OPTIONS.user) {
      updateThemeClassInDom(theme.theme);
      removeThemeChangeListener(listener);
    } else {
      addThemeChangeListener(listener);
    }

    return () => {
      removeThemeChangeListener(listener);
    };
  }, [setTheme, theme.selection, theme.theme, handleThemeChange]);

  return theme;
};

export default useSystemThemeListener;
