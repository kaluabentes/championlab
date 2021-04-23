import { ThemeProvider } from "styled-components";

import { useTheme } from "~/contexts/theme";
import GlobalStyled from "~/styles/global";

function Theme({ children }) {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyled theme={theme} />
      {children}
    </ThemeProvider>
  );
}

export default Theme;
