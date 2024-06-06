import { useContext } from "react";
import { ThemeContext } from "@/components/ThemeProvider";

const useTheme = () => {
  const theme = useContext(ThemeContext);

  if (!theme) throw new Error("ThemeProvider 안에서 사용해주세요.");

  return theme;
};

export default useTheme;
