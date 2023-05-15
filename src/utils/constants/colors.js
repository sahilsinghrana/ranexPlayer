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

const violet = {
  1: '#fdfcfe',
  2: '#fbfaff',
  3: '#f5f2ff',
  4: '#ede9fe',
  5: '#e4defc',
  6: '#d7cff9',
  7: '#c4b8f3',
  8: '#aa99ec',
  9: '#6e56cf',
  10: '#644fc1',
  11: '#5746af',
  12: '#20134b',
};

const violetDark = {
  1: '#17151f',
  2: '#1c172b',
  3: '#251e40',
  4: '#2c2250',
  5: '#32275f',
  6: '#392c72',
  7: '#443592',
  8: '#5842c3',
  9: '#6e56cf',
  10: '#7c66dc',
  11: '#9e8cfc',
  12: '#f1eefe',
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

const primary = violet;
const primaryDark = violetDark;
const secondary = tomato;
const secondaryDark = tomatoDark;
const accent = primary;
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
  // ----------------
  appBackground: gray[7],
  appBackgroundDark: grayDark[1],
  subtleBackground: primary[2],
  subtleBackgroundDark: primaryDark[2],
  elementBackground: primary[8],
  elementBackgroundDark: primaryDark[8],
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
  solidBackgroundDark: primaryDark[9],
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
