// TODO -- Refactor and avoid dark duplication of objects

const tomato = {
  1: '#fffcfc',
  2: '#fff8f7',
  3: '#fff0ee',
  4: '#ffe6e2',
  5: '#fdd8d3',
  6: '#fac7be',
  7: '#f3b0a2',
  8: '#ea9280',
  9: '#e54d2e',
  10: '#db4324',
  11: '#ca3214',
  12: '#341711',
};

const tomatoDark = {
  1: '#1d1412',
  2: '#2a1410',
  3: '#3b1813',
  4: '#481a14',
  5: '#541c15',
  6: '#652016',
  7: '#7f2315',
  8: '#a42a12',
  9: '#e54d2e',
  10: '#ec5e41',
  11: '#f16a50',
  12: '#feefec',
};

const blueDark = {
  1: '#0f1720',
  2: '#0f1b2d',
  3: '#10243e',
  4: '#102a4c',
  5: '#0f3058',
  6: '#0d3868',
  7: '#0a4481',
  8: '#0954a5',
  9: '#0091ff',
  10: '#369eff',
  11: '#52a9ff',
  12: '#eaf6ff',
};

const mauve = {
  1: '#fdfcfd',
  2: '#f9f8f9',
  3: '#f4f2f4',
  4: '#eeedef',
  5: '#e9e8ea',
  6: '#e4e2e4',
  7: '#dcdbdd',
  8: '#c8c7cb',
  9: '#908e96',
  10: '#86848d',
  11: '#6f6e77',
  12: '#1a1523',
};

const mauveDark = {
  1: '#161618',
  2: '#1c1c1f',
  3: '#232326',
  4: '#28282c',
  5: '#2e2e32',
  6: '#34343a',
  7: '#3e3e44',
  8: '#504f57',
  9: '#706f78',
  10: '#7e7d86',
  11: '#a09fa6',
  12: '#ededef',
};

const indigo = {
  1: '#fdfdfe',
  2: '#f8faff',
  3: '#f0f4ff',
  4: '#e6edfe',
  5: '#d9e2fc',
  6: '#c6d4f9',
  7: '#aec0f5',
  8: '#8da4ef',
  9: '#3e63dd',
  10: '#3a5ccc',
  11: '#3451b2',
  12: '#101d46',
};

const primary = indigo;
const primaryDark = blueDark;
const secondary = tomato;
const secondaryDark = tomatoDark;
const accent = tomato;
const accentDark = primaryDark;
const gray = mauve;
const grayDark = mauveDark;

const colorScale = {
  primary: primary,
  primaryDark: primaryDark,
  secondary: secondary,
  secondaryDark: secondaryDark,
  accent: accent,
  accentDark: accentDark,
  gray: gray,
  grayDark: grayDark,
  danger: tomato,
  // ----------------
  appBackground: gray[7],
  appBackgroundDark: grayDark[1],
  subtleBackground: primary[2],
  subtleBackgroundDark: primaryDark[2],
  elementBackground: primary[9],
  elementBackgroundDark: primaryDark[10],
  hoverElementBackground: primary[12],
  hoverElementBackgroundDark: primaryDark[7],
  hoverBackground: primary[4],
  hoverBackgroundDark: primaryDark[4],
  activeBackground: primary[5],
  activeBackgroundDark: primaryDark[5],
  subtleBorder: primary[6],
  subtleBorderDark: primaryDark[6],
  border: primary[7],
  borderDark: primaryDark[7],
  borderHover: primary[8],
  borderHoverDark: primaryDark[8],
  solidBackground: primary[9],
  solidBackgroundDark: primaryDark[7],
  hoverSolidBackground: primary[10],
  hoverSolidBackgroundDark: primaryDark[10],
  textPrimary: primary[11],
  textPrimaryDark: primaryDark[11],
  textSecondary: secondary[11],
  textSecondaryDark: secondaryDark[11],
  text: gray[11],
  textDark: grayDark[11],
};

export default colorScale;

// 1
// App background
// 2
// Subtle background
// 3
// UI element background
// 4
// Hovered UI element background
// 5
// Active / Selected UI element background
// 6
// Subtle borders and separators
// 7
// UI element border and focus rings
// 8
// Hovered UI element border
// 9
// Solid backgrounds
// 10
// Hovered solid backgrounds
// 11
// Low-contrast text
// 12
// High-contrast text
