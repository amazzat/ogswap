import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { AppLayout } from "../core/components/app-layout";
import { StylesProvider } from "../core/components/styles-provider";

const CurrentThemeProvider = dynamic(
  () => import("../core/theme-context"),
  {
    ssr: false,
  }
);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CurrentThemeProvider>
      <StylesProvider>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </StylesProvider>
    </CurrentThemeProvider>
  );
}
