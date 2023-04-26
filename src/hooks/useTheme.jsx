import themeAtom from '../store/atoms/themeAtom';

import {useAtom} from 'jotai';

const useTheme = () => {
  const [theme] = useAtom(themeAtom);
  return theme.theme;
};

export default useTheme;
