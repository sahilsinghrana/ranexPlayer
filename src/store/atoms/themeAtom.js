import {THEME_SELECTOR_OPTIONS, initializeDefaultTheme} from '../../lib/theme';

import {atomWithStorage} from 'jotai/utils';

const themeAtom = atomWithStorage('themeColor', {
  theme: initializeDefaultTheme(),
  selection: THEME_SELECTOR_OPTIONS.default,
});

export default themeAtom;
