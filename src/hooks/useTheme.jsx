import { useAtom } from "jotai";
import themeAtom from "../store/atoms/themeAtom";

const useTheme = () => {
  const [theme] = useAtom(themeAtom);
  return theme.theme;
};

export default useTheme;
