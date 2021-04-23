import { ThemeContextProvider } from "~/contexts/theme";
import Theme from "./_theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </ThemeContextProvider>
  );
}

export default MyApp;
