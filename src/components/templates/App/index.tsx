import React from "react";
import Container from "~/components/atoms/Container";
import Header from "~/components/organisms/Header";

import { THEME, useTheme } from "~/contexts/theme";

function App({ children }) {
  const { theme, setTheme } = useTheme();

  function handleThemeSwitch() {
    if (theme === THEME.light) {
      setTheme(THEME.dark);
      return;
    }
    setTheme(THEME.light);
  }

  return (
    <>
      <Header>
        <button onClick={handleThemeSwitch}>Switch Theme</button>
      </Header>
      <Container>{children}</Container>
    </>
  );
}

export default App;
