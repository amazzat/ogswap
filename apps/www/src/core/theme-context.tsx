import { createContext, ReactNode, useContext } from "react";
import themes from "react95/dist/themes";
import { useLocalStorage } from "usehooks-ts";

export type ThemeConfig = typeof themes[keyof typeof themes];
export type ThemeName = keyof typeof themes;

const themeContext = createContext<null | {
  theme: ThemeName;
  config: ThemeConfig;
  setTheme: (theme: ThemeName) => void;
}>(null);

export function CurrentThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useLocalStorage<ThemeName>("theme", "original");

  const config = themes[theme];

  return (
    <themeContext.Provider value={{ theme, setTheme, config }}>
      {children}
    </themeContext.Provider>
  );
}

export const useCurrentTheme = () => {
  const context = useContext(themeContext);

  if (context === null) {
    throw new Error(
      "useCurrentTheme must be used within a CurrentThemeProvider"
    );
  }

  return context;
};

export default CurrentThemeProvider;
