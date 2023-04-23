import { atom } from "jotai";

export const THEME_SELECTOR_OPTIONS = {
  user: "user",
  default: "default",
  system: "system",
};

const getSystemTheme = () => {
  let query = window.matchMedia("(prefers-color-scheme: dark)");
  if (query.matches) {
    return "dark";
  } else {
    return "light";
  }
};

const themeAtom = atom({
  theme: getSystemTheme(),
  selection: THEME_SELECTOR_OPTIONS.default,
});

export default themeAtom;
