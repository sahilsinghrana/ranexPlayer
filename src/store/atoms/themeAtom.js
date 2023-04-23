import { atomWithStorage } from "jotai/utils";

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

const themeAtom = atomWithStorage("themeColor", {
  theme: getSystemTheme(),
  selection: THEME_SELECTOR_OPTIONS.default,
});

export default themeAtom;
