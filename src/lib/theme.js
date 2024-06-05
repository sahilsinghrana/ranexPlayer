export const updateThemeClassInDom = (theme) => {
  document.querySelector("body").classList.value = theme;
};

export const THEME_SELECTOR_OPTIONS = {
  user: "user",
  default: "default",
  system: "system",
};

export const getSystemTheme = () => {
  const query = window.matchMedia("(prefers-color-scheme: dark)");
  if (query.matches) {
    return "dark";
  } else {
    return "light";
  }
};

export const initializeDefaultTheme = () => {
  const theme = getSystemTheme();
  updateThemeClassInDom(theme);
  return theme;
};
