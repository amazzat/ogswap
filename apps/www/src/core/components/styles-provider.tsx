import { ReactNode } from "react";
import { styleReset } from "react95";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { useCurrentTheme } from "../theme-context";

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('/fonts/ms_sans_serif.woff2') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('/fonts/ms_sans_serif_bold.woff2') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    font-family: 'ms_sans_serif';
  }
`;

export function StylesProvider({ children }: { children: ReactNode }) {
  const { config } = useCurrentTheme();
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={config}>{children}</ThemeProvider>
    </>
  );
}
